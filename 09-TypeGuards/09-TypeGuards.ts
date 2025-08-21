// 09-TypeGuards.ts
// typeof, instanceof, in, نگهبانِ نوع سفارشی، و توابع assert

export function printId(id: string | number) {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id.toFixed(2));
}

export class Dog {
  bark() {
    console.log("woof");
  }
}
export class Cat {
  meow() {
    console.log("meow");
  }
}

export function speak(a: Dog | Cat) {
  if (a instanceof Dog) a.bark();
  else a.meow();
}

// in-guard
export type Fish = { swim: () => void };
export type Bird = { fly: () => void };
export function move(pet: Fish | Bird) {
  "swim" in pet ? pet.swim() : pet.fly();
}

// نگهبان سفارشی (Type Predicate)
export function isDog(x: unknown): x is Dog {
  return x instanceof Dog;
}

// تابع assert برای اطمینان از یک پیش‌شرط
export function assertHas<K extends PropertyKey>(
  obj: unknown,
  key: K
): asserts obj is Record<K, unknown> {
  if (typeof obj !== "object" || obj === null || !(key in obj))
    throw new Error("Missing key");
}
