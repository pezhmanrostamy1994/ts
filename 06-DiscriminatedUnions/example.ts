// 1️⃣ تعریف انواع
type Success = { status: "success"; data: string };
type Failure = { status: "error"; message: string };
type Loading = { status: "loading" };
type APIResponse = Success | Failure | Loading;

// 2️⃣ استفاده از switch با Exhaustiveness check
function handle(res: APIResponse) {
  switch (res.status) {
    case "success":
      return res.data.toUpperCase();
    case "error":
      return `ERR: ${res.message}`;
    case "loading":
      return "Loading...";
    default: {
      const _exhaustive: never = res;
      return _exhaustive;
    }
  }
}

// 3️⃣ نمونه استفاده
const r1: APIResponse = { status: "success", data: "Hello" };
const r2: APIResponse = { status: "error", message: "Not found" };
const r3: APIResponse = { status: "loading" };

console.log(handle(r1)); // "HELLO"
console.log(handle(r2)); // "ERR: Not found"
console.log(handle(r3)); // "Loading..."
