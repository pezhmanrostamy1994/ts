// 06-DiscriminatedUnions.ts
// یونین متمایز + بررسی کامل بودن با never

export type Success = { status: "success"; data: string };
export type Failure = { status: "error"; message: string };
export type Loading = { status: "loading" };
export type APIResponse = Success | Failure | Loading;

export function handle(res: APIResponse) {
  switch (res.status) {
    case "success":
      return res.data.toUpperCase();
    case "error":
      return `ERR: ${res.message}`;
    case "loading":
      return "Loading...";
    default: {
      const _exhaustive: never = res; // اگر نوع جدیدی اضافه شود، اینجا خطا می‌دهد
      return _exhaustive;
    }
  }
}
