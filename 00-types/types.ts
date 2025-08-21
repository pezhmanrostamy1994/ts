// types.ts
/**
 * =============================
 * Basic Types – انواع پایه‌ای
 * =============================
 */

// number: اعداد صحیح یا اعشاری
export let age: number = 25;

// string: رشته
export let nameStr: string = "Alice";

// boolean: درست/غلط
export let isAdmin: boolean = true;

// any: هر نوع (غیربهینه)
export let anyValue: any = 5;
anyValue = "hello"; // هیچ خطایی نمی‌دهد

// unknown: مشابه any ولی امن‌تر
export let unknownValue: unknown = 5;
if (typeof unknownValue === "number") {
  console.log(unknownValue + 1);
}

// void: معمولاً برای توابع بدون بازگشت
export function logMessage(msg: string): void {
  console.log(msg);
}

// null و undefined
export let n: null = null;
export let u: undefined;

// never: هیچ مقداری ندارد، برای خطا یا حلقه بی‌پایان
export function fail(): never {
  throw new Error("Something went wrong!");
}

/**
 * =============================
 * Array Types – آرایه‌ها
 * =============================
 */
export let nums: number[] = [1, 2, 3];
export let names: Array<string> = ["Alice", "Bob"];
export const readonlyNums: readonly number[] = [1, 2, 3];

/**
 * =============================
 * Tuple – تاپل
 * =============================
 */
export let pair: [number, string] = [1, "one"];

/**
 * =============================
 * Object Types – نوع شیء
 * =============================
 */
export let obj: {} = { a: 1 };

// Record<K,V>: کلیدهای مشخص با مقدار مشخص
export type UserRoles = Record<string, boolean>;
export let roles: UserRoles = { admin: true };

// Partial<T>: همه فیلدها اختیاری می‌شوند
export type PartialUser = Partial<{ name: string; age: number }>;

// Required<T>: همه فیلدها الزامی می‌شوند
export type ReqUser = Required<{ name?: string }>;

// Pick<T,K>: انتخاب تعدادی از کلیدها
export type NameOnly = Pick<{ name: string; age: number }, "name">;

// Omit<T,K>: حذف تعدادی کلید
export type WithoutAge = Omit<{ name: string; age: number }, "age">;

/**
 * =============================
 * Union & Intersection Types
 * =============================
 */
export let val: number | string = "hello"; // union: یکی از دو نوع

export type AB = { a: number } & { b: string }; // intersection: ترکیب دو نوع
export let x: AB = { a: 1, b: "hi" };
