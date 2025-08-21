// 01-Generics.ts
// مثال‌های حرفه‌ای جنریک‌ها + قیود و پارامتر پیش‌فرض

// تابع جنریک ساده
export function identity<T>(value: T): T {
  return value;
}

// محدود کردن T (Constraint)
export function prop<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

// پارامتر جنریک پیش‌فرض
export type Box<T = string> = { value: T };

// کلاس صف جنریک
export class Queue<T> {
  private items: T[] = [];
  enqueue(item: T) {
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    return this.items[0];
  }
}

// ترکیب چند جنریک
export function mapArray<T, U>(arr: T[], fn: (x: T, i: number) => U): U[] {
  const out: U[] = [];
  for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i));
  return out;
}

// Repository الگوی ساده
export interface Entity {
  id: string;
}
export class MemoryRepository<T extends Entity> {
  private data = new Map<string, T>();
  upsert(entity: T) {
    this.data.set(entity.id, entity);
  }
  findById(id: string): T | undefined {
    return this.data.get(id);
  }
}
