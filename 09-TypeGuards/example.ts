// 1️⃣ typeof guard
function printValue(value: string | number) {
  if (typeof value === "string") console.log("String:", value.toUpperCase());
  else console.log("Number:", value.toFixed(2));
}

printValue("hello"); // String: HELLO
printValue(3.1415); // Number: 3.14

// 2️⃣ instanceof guard
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) animal.bark();
  else animal.meow();
}

speak(new Dog()); // Woof!
speak(new Cat()); // Meow!

// 3️⃣ in guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(pet: Fish | Bird) {
  if ("swim" in pet) pet.swim();
  else pet.fly();
}

move({ swim: () => console.log("Swimming!") }); // Swimming!
move({ fly: () => console.log("Flying!") }); // Flying!

// 4️⃣ نگهبان سفارشی (Type Predicate)
function isDog(x: unknown): x is Dog {
  return x instanceof Dog;
}

const pet: unknown = new Dog();
if (isDog(pet)) pet.bark(); // Woof!

// 5️⃣ تابع assert برای اطمینان از وجود کلید
function assertHasKey<K extends PropertyKey>(
  obj: unknown,
  key: K
): asserts obj is Record<K, unknown> {
  if (typeof obj !== "object" || obj === null || !(key in obj))
    throw new Error(`Object is missing key: ${String(key)}`);
}

const data: unknown = { name: "Alice" };
assertHasKey(data, "name");
console.log(data.name); // Alice ✅ TypeScript مطمئن شد که کلید وجود دارد
