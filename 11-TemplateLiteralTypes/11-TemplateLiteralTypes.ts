// 11-TemplateLiteralTypes.ts
// ساخت رشته‌های نوع‌دار + Remap کلیدها

export type Size = "sm" | "md" | "lg";
export type Color = "red" | "blue" | "green";
export type ButtonVariant = `${Size}-${Color}`;

export const v1: ButtonVariant = "sm-red";

// ساخت نام ایونت‌ها
export type EventName<K extends string> = `on${Capitalize<K>}`;
export type DOMEvents = EventName<"click" | "focus" | "blur">; // "onClick" | "onFocus" | "onBlur"

// Remap کلیدهای یک نوع به Getterها
export type Getters<T> = { [K in keyof T] };
