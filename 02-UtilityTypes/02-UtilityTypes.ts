// 02-UtilityTypes.ts
// Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, InstanceType, Parameters, ConstructorParameters, Awaited

export interface Todo {
  title: string;
  description: string;
  completed: boolean | null;
}

export const t1: Partial<Todo> = { title: "Buy milk" };
export const t2: Required<Todo> = {
  title: "X",
  description: "Y",
  completed: false,
};
export const t3: Readonly<Todo> = {
  title: "A",
  description: "B",
  completed: null,
};
export type TodoPreview = Pick<Todo, "title" | "completed">;
export type TodoWithoutDesc = Omit<Todo, "description">;
export type FeatureFlags = Record<"dark" | "beta" | "newUI", boolean>;

export type OnlyString = Extract<string | number | null, string>; // string
export type NotNullish = NonNullable<string | undefined | null>; // string

export function f(a: number, b: string) {
  return { a, b };
}
export type FReturn = ReturnType<typeof f>; // { a: number; b: string }
export type FParams = Parameters<typeof f>; // [number, string]

export class Person {
  constructor(public name: string) {}
}
export type PInstance = InstanceType<typeof Person>;

// Awaited نمونه
export type Resolved<T> = T extends Promise<infer R> ? R : T;
export type R1 = Resolved<Promise<number>>; // number

