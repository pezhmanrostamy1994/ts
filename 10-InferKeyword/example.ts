// 1️⃣ ReturnType سفارشی با infer
type MyReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

function makeUser(name: string, age: number) {
  return { name, age, active: true };
}

type UserType = MyReturnType<typeof makeUser>;
// UserType = { name: string; age: number; active: boolean }

// 2️⃣ Parameters سفارشی با infer
type MyParameters<F> = F extends (...args: infer P) => any ? P : never;
type MakeUserParams = MyParameters<typeof makeUser>;
// MakeUserParams = [string, number]

// 3️⃣ استخراج اعضای آرایه یا تاپل
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
type Numbers = ArrayElement<readonly [1, 2, 3]>;
// Numbers = 1 | 2 | 3

// 4️⃣ Head و Tail برای تاپل‌ها
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

type MyTuple = [string, number, boolean];
type First = Head<MyTuple>; // string
type Rest = Tail<MyTuple>; // [number, boolean]

// 5️⃣ کاربرد در curry کردن توابع
function curry<A, B, R>(fn: (a: A, b: B) => R) {
  return (a: A) => (b: B) => fn(a, b);
}

const add = (x: number, y: number) => x + y;
const curriedAdd = curry(add);
const result = curriedAdd(2)(3); // 5 ✅

type CurriedParams = MyParameters<typeof curriedAdd>; // [number]
type CurriedReturn = MyReturnType<typeof curriedAdd>; // (b: number) => number
