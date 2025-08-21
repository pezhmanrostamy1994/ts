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

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}

