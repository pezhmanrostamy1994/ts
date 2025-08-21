// 1️⃣ IsString
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// ✅ استفاده:
const testA: A = true;
const testB: B = false;

// 2️⃣ ExtractBy (توزیعی روی Union)
type ExtractBy<T, U> = T extends U ? T : never;
type OnlyNumbers = ExtractBy<string | number | boolean, number>; // number

const num: OnlyNumbers = 123;
// const str: OnlyNumbers = "hello"; // ❌ خطا، فقط number مجاز است

// 3️⃣ Flatten
type Flatten<T> = T extends (infer U)[] ? U : T;
type Arr = Flatten<number[]>; // number
type Single = Flatten<string>; // string

const f1: Arr = 42;
const f2: Single = "hello";

// 4️⃣ AwaitedLike
type AwaitedLike<T> = T extends Promise<infer U> ? AwaitedLike<U> : T;

type P1 = AwaitedLike<Promise<string>>; // string
type P2 = AwaitedLike<Promise<Promise<number>>>; // number

// 5️⃣ UnionToIntersection
type UnionToIntersection<U> = (U extends any ? (x: U) => any : never) extends (
  x: infer I
) => any
  ? I
  : never;

type UI = UnionToIntersection<{ a: string } | { b: number }>;
// نتیجه: { a: string } & { b: number }

const obj: UI = { a: "hello", b: 123 }; // ✅ باید هر دو کلید موجود باشند
