// انواع پایه
type Admin = { role: "admin"; permissions: string[] };
type Member = { role: "member"; points: number };

// Union → یکی از دو نوع
type Person = Admin | Member;

const p1: Person = { role: "admin", permissions: ["read", "write"] };
const p2: Person = { role: "member", points: 42 };

// تابعی که بر اساس Union عمل می‌کند
function describe(person: Person) {
  if (person.role === "admin") {
    console.log("Admin with permissions:", person.permissions.join(", "));
  } else {
    console.log("Member with points:", person.points);
  }
}

// Intersection → ترکیب تمام ویژگی‌ها
type WithId = { id: string };
type WithTimestamps = { createdAt: Date; updatedAt: Date };

type Entity = WithId & WithTimestamps;

const e: Entity = {
  id: "123",
  createdAt: new Date(),
  updatedAt: new Date(),
};

// ترکیب Admin و Member به صورت سازگار
type AdminCompat = { role: string; permissions: string[] };
type MemberCompat = { role: string; points: number };

type SuperUser = AdminCompat & MemberCompat; // role: string

const su: SuperUser = {
  role: "admin",
  permissions: ["*"],
  points: 100,
};

// مثال استفاده
console.log("Person p1:");
describe(p1);

console.log("SuperUser su:");
console.log(su.role, su.permissions, su.points);
