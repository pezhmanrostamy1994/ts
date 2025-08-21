// 10-InferKeyword.ts
// infer برای گرفتن نوع‌های میانی از توابع/آرایه‌ها/تاپل‌ها

// ReturnType سفارشی
export type MyReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

export function toPair(n: number) {
  return [n, String(n)] as const;
}
export type Pair = MyReturnType<typeof toPair>; // readonly [number, string]

// Parameters سفارشی
export type MyParameters<F> = F extends (...args: infer P) => any ? P : never;
export type ToPairParams = MyParameters<typeof toPair>; // [number]

// استخراج نوع اعضای آرایه
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
export type AE = ArrayElement<readonly [1, 2, 3]>; // 1 | 2 | 3

// Head/Tail تاپل
export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
export type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

// Curry (امضای ساده‌شده)
export function curry<A, B, R>(fn: (a: A, b: B) => R) {
  return (a: A) => (b: B) => fn(a, b);
}
