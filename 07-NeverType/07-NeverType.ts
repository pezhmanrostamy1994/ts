// 07-NeverType.ts
// کاربردهای never: عدم بازگشت، بن‌بست تایپی، و exhaustiveness checking

// عدم بازگشت
export function fail(message: string): never {
  throw new Error(message);
}
export function loopForever(): never {
  while (true) {}
}

// مثال Intersection ناسازگار که به never منتهی می‌شود
export type A = { role: "admin" };
export type B = { role: "user" };
export type AB = A & B; // role: never

// استفاده از never برای بررسی پوشش کامل حالت‌ها
export type Shape =
  | { kind: "circle"; r: number }
  | { kind: "square"; s: number };
export function area(shape: Shape): number {
  if (shape.kind === "circle") return Math.PI * shape.r ** 2;
  if (shape.kind === "square") return shape.s ** 2;
  const _x: never = shape; // اگر نوع جدید اضافه شود، این خط خطا می‌دهد
  return _x;
}
