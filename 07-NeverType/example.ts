// تعریف یونین متمایز (Discriminated Union)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

// تابع کمکی که هیچ‌وقت برنمی‌گردد
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + JSON.stringify(x));
}

// محاسبه مساحت با Exhaustiveness Check
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      return assertNever(shape); // اگر Shape جدید اضافه شود، TS خطا می‌دهد
  }
}

// مثال Intersection ناسازگار
export type A = { role: "admin" };
export type B = { role: "user" };
type AB = A & B; // role: never → هیچ مقداری نمی‌تواند این نوع را داشته باشد

// مثال استفاده
const myCircle: Shape = { kind: "circle", radius: 5 };
console.log(area(myCircle)); // 78.53981633974483

// اضافه کردن نوع جدید بدون بروزرسانی area → خطای TS
type Shape2 = Shape | { kind: "triangle"; base: number; height: number };
// area({ kind: "triangle", base: 5, height: 10 }); // خطا: Argument of type '{ kind: "triangle"; base: number; height: number; }' is not assignable to parameter of type 'Shape'.
