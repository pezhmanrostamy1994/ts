// 05-ConditionalTypes.ts
// انواع شرطی + توزیعی بودن روی Union ها

export type IsString<T> = T extends string ? true : false;
export type A = IsString<string>; // true
export type B = IsString<number>; // false

// توزیعی بودن روی Union
export type ExtractBy<T, U> = T extends U ? T : never;
export type OnlyNumbers = ExtractBy<string | number | boolean, number>; // number

// Flatten و Awaited ساده
export type Flatten<T> = T extends (infer U)[] ? U : T;
export type AwaitedLike<T> = T extends Promise<infer U> ? AwaitedLike<U> : T;

// تبدیل Union به Intersection (ترفند پیشرفته)
export type UnionToIntersection<U> = (
  U extends any ? (x: U) => any : never
) extends (x: infer I) => any
  ? I
  : never;
export type UI = UnionToIntersection<{ a: string } | { b: number }>; // { a: string } & { b: number }
