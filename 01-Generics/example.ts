
// 01-Generics.ts
// ========================
// مثال حرفه‌ای: Repository جنریک برای مدیریت داده‌ها
// ========================

// موجودیت پایه
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// مدل User
export interface User extends BaseEntity {
  name: string;
  email: string;
}

// مدل Product
export interface Product extends BaseEntity {
  title: string;
  price: number;
}

// Repository جنریک
export class Repository<T extends BaseEntity> {
  private data: Map<string, T> = new Map();

  // ایجاد یا بروزرسانی
  upsert(entity: T): void {
    this.data.set(entity.id, { ...entity, updatedAt: new Date() });
  }

  // گرفتن یک رکورد با آیدی
  findById(id: string): T | undefined {
    return this.data.get(id);
  }

  // گرفتن همه رکوردها
  findAll(): T[] {
    return Array.from(this.data.values());
  }

  // حذف رکورد
  delete(id: string): boolean {
    return this.data.delete(id);
  }
}

// ========================
// استفاده حرفه‌ای از Repository جنریک
// ========================

const userRepo = new Repository<User>();
const productRepo = new Repository<Product>();

// اضافه کردن کاربر جدید
userRepo.upsert({
  id: "u1",
  name: "علی",
  email: "ali@example.com",
  createdAt: new Date(),
  updatedAt: new Date(),
});

// اضافه کردن محصول جدید
productRepo.upsert({
  id: "p1",
  title: "گوشی موبایل",
  price: 25000000,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// گرفتن لیست کاربران
const users = userRepo.findAll();
console.log("لیست کاربران:", users);

// گرفتن لیست محصولات
const products = productRepo.findAll();
console.log("لیست محصولات:", products);

// گرفتن کاربر خاص
const user = userRepo.findById("u1");
console.log("کاربر پیدا شده:", user);
