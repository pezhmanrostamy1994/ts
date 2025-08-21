// 02-UtilityTypes.ts
// Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, InstanceType, Parameters, ConstructorParameters, Awaited

export interface Todo {
    title: string;
    description: string;
    completed: boolean | null;
  }
  
  export const t1: Partial<Todo> = { title: "Buy milk" };
  export const t2: Required<Todo> = {
    title: "X",
    description: "Y",
    completed: false,
  };
  export const t3: Readonly<Todo> = {
    title: "A",
    description: "B",
    completed: null,
  };
  export type TodoPreview = Pick<Todo, "title" | "completed">;
  export type TodoWithoutDesc = Omit<Todo, "description">;
  export type FeatureFlags = Record<"dark" | "beta" | "newUI", boolean>;
  
  export type OnlyString = Extract<string | number | null, string>; // string
  export type NotNullish = NonNullable<string | undefined | null>; // string
  
  export function f(a: number, b: string) {
    return { a, b };
  }
  export type FReturn = ReturnType<typeof f>; // { a: number; b: string }
  export type FParams = Parameters<typeof f>; // [number, string]
  
  export class Person {
    constructor(public name: string) {}
  }
  export type PInstance = InstanceType<typeof Person>;
  
  // Awaited نمونه
  export type Resolved<T> = T extends Promise<infer R> ? R : T;
  export type R1 = Resolved<Promise<number>>; // number
  
  // ======================
  // مثال‌های کاربردی برای موارد بالا
  // ======================
  
  // 1. Partial<T> → برای آپدیت بخشی از یک تسک
  function updateTodo(id: string, updates: Partial<Todo>) {
    console.log(`Updating todo ${id} with:`, updates);
  }
  updateTodo("1", { completed: true });
  
  // 2. Required<T> → حتماً باید همه فیلدها پر شوند
  const todoFull: Required<Todo> = {
    title: "Study TS",
    description: "Learn utility types",
    completed: false,
  };
  
  // 3. Readonly<T> → فقط خواندنی
  const todoReadOnly: Readonly<Todo> = {
    title: "Run",
    description: "Morning exercise",
    completed: true,
  };
  // todoReadOnly.completed = false; // ❌ خطا
  
  // 4. Pick<T, K> → انتخاب فیلدهای خاص
  const todoPreviewExample: TodoPreview = {
    title: "Shopping",
    completed: null,
  };
  
  // 5. Omit<T, K> → حذف فیلدهای خاص
  const todoWithoutDescExample: TodoWithoutDesc = {
    title: "Gym",
    completed: false,
  };
  
  // 6. Record<K, T> → ساخت آبجکت با کلیدهای ثابت و تایپ یکسان
  const featuresExample: FeatureFlags = {
    dark: true,
    beta: false,
    newUI: true,
  };
  
  // مثال کاربردی‌تر برای Record
  const userRoles: Record<string, "admin" | "user" | "guest"> = {
    ali: "admin",
    reza: "user",
    sara: "guest",
  };
  
  // 7. Extract<T, U> → استخراج نوع‌های مشترک
  const myString: OnlyString = "Hello World"; // فقط string مجاز است
  
  // 8. NonNullable<T> → حذف null و undefined
  const myName: NotNullish = "Mehdi"; // ✅
  // const myName2: NotNullish = null; // ❌
  
  // 9. ReturnType<T> → گرفتن نوع خروجی تابع
  const fnResult: FReturn = f(10, "Hi");
  console.log(fnResult.a); // 10
  
  // 10. Parameters<T> → گرفتن نوع پارامترهای تابع
  const params: FParams = [42, "Answer"];
  console.log(f(...params)); // { a: 42, b: "Answer" }
  
  // 11. InstanceType<T> → گرفتن نوع نمونه کلاس
  const personInstance: PInstance = new Person("Ali");
  console.log(personInstance.name); // Ali
  
  // 12. Awaited<T> → گرفتن مقدار resolve شده از Promise
  async function fetchData(): Promise<string> {
    return "Data loaded";
  }
  type Data = Awaited<ReturnType<typeof fetchData>>; // string
  const data: Data = "Data loaded";
  