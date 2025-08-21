// 08-UnionIntersection.ts
// مثال‌های بی‌خطا برای Union و Intersection

export type Admin = { role: "admin"; permissions: string[] };
export type Member = { role: "member"; points: number };

// Union: یکی از دو نوع
export type Person = Admin | Member;
export const p1: Person = { role: "admin", permissions: ["read"] };
export const p2: Person = { role: "member", points: 10 };

// Intersection: فقط وقتی فیلدهای مشترک سازگارند
export type WithId = { id: string };
export type WithTimestamps = { createdAt: Date; updatedAt: Date };
export type Entity = WithId & WithTimestamps;
export const e: Entity = {
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

// اگر بخواهیم Admin و Member را ترکیب کنیم، باید فیلد مشترک role سازگار شود:
export type AdminCompat = { role: string; permissions: string[] };
export type MemberCompat = { role: string; points: number };
export type SuperUser = AdminCompat & MemberCompat; // اکنون role: string
export const su: SuperUser = { role: "admin", permissions: ["*"], points: 100 };
