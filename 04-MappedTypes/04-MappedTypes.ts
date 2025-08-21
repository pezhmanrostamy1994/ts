// 04-MappedTypes.ts
// بازسازی انواع، تغییر modifiers، Remap کردن کلیدها با Template Literals

export interface Features {
  darkMode: () => void;
  newUI: () => void;
  version: string;
}

// ساده: همهٔ کلیدها boolean
export type OptionsFlags<T> = { [K in keyof T]: boolean };
export const flags: OptionsFlags<Features> = {
  darkMode: true,
  newUI: false,
  version: true,
};

// افزودن readonly و اختیاری کردن (Modifiers)
export type ReadonlyOptional<T> = { readonly [K in keyof T]?: T[K] };

// Conditional + Mapped: فقط توابع → boolean، بقیه بدون تغییر
export type FeatureOptions<T> = {
  [K in keyof T]: T[K] extends Function ? boolean : T[K];
};
export const advanced: FeatureOptions<Features> = {
  darkMode: true,
  newUI: false,
  version: "1.0",
};

// Remap کلیدها با as + Template Literals: ساخت Getterها
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export type FeatureGetters = Getters<Features>;
// نتیجه: { getDarkMode: () => () => void; getNewUI: () => () => void; getVersion: () => string }
