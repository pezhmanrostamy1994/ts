// 03-Keyof-Lookup.ts
// keyof و Lookup Types با توابع امن get/set

export interface User {
  id: string;
  name: string;
  age: number;
  role: "admin" | "user";
}

export type UserKeys = keyof User; // "id" | "name" | "age" | "role"
export type RoleType = User["role"]; // "admin" | "user"

// ==================
// توابع امن get/set
// ==================
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

// ==================
// مثال ساده
// ==================
const u: User = { id: "1", name: "Ali", age: 30, role: "admin" };
const role = getProperty(u, "role"); // نوع دقیق: "admin" | "user"
setProperty(u, "age", 31);

// ==================
// مثال با چند آبجکت
// ==================
interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

const p: Product = { id: "p1", name: "Milk", price: 10, inStock: true };

const productName = getProperty(p, "name"); // string
setProperty(p, "price", 12); // ✅ فقط عدد مجاز است

// ==================
// مثال با nested object و Lookup Type
// ==================
interface Order {
  id: string;
  user: User;
  product: Product;
  quantity: number;
}

const order: Order = {
  id: "o1",
  user: u,
  product: p,
  quantity: 2,
};

// گرفتن نوع role از user با Lookup Type
type OrderUserRole = Order["user"]["role"]; // "admin" | "user"

// getProperty روی nested property
const orderUserRole = getProperty(order.user, "role"); // type-safe
setProperty(order.product, "inStock", false);

// ==================
// مثال استفاده از keyof برای لیست keys
// ==================
function printKeys<T extends object>(obj: T) {
  const keys: (keyof T)[] = Object.keys(obj) as (keyof T)[];
  keys.forEach((k) => console.log(k, obj[k]));
}

printKeys(u); // id, name, age, role
printKeys(p); // id, name, price, inStock
