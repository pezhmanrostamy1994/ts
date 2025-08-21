// 1️⃣ ترکیب رشته‌ها برای نوع‌دهی
export type Size = "sm" | "md" | "lg";
export type Color = "red" | "blue" | "green";

// نوع ترکیبی با Template Literal
export type ButtonVariant = `${Size}-${Color}`;

const v1: ButtonVariant = "sm-red"; // ✅ درست
// const v2: ButtonVariant = "xl-yellow"; // ❌ خطا، چون با Size | Color همخوانی ندارد

// 2️⃣ ساخت نام ایونت‌ها با Capitalize
export type EventName<K extends string> = `on${Capitalize<K>}`;
export type DOMEvents = EventName<"click" | "focus" | "blur">;
// DOMEvents = "onClick" | "onFocus" | "onBlur"

// 3️⃣ Remap کلیدها با افزودن Getter
export type User = { name: string; age: number };
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
/* 
UserGetters = {
  getName: () => string;
  getAge: () => number;
}
*/

// استفاده عملی
const userGetters: UserGetters = {
  getName: () => "Alice",
  getAge: () => 30,
};

// 4️⃣ ترکیب Template Literal با Union
type Sizes = "sm" | "md" | "lg";
type Colors = "red" | "blue";
type Variants = `${Sizes}_${Colors}`; // "sm_red" | "sm_blue" | "md_red" | "md_blue" | "lg_red" | "lg_blue"
const btn: Variants = "md_blue"; // ✅ درست
