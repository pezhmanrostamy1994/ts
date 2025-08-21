// Features interface
export interface Features {
  darkMode: () => void;
  newUI: () => void;
  version: string;
}

// Getters type
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// نمونه واقعی از Features
const features: Features = {
  darkMode: () => console.log("Dark mode enabled"),
  newUI: () => console.log("New UI activated"),
  version: "1.0.0",
};

// تابعی که Getterها را می‌سازد
function createGetters<T>(obj: T): Getters<T> {
  const result = {} as Getters<T>;

  for (const key in obj) {
    const getterName = `get${
      key.charAt(0).toUpperCase() + key.slice(1)
    }` as keyof Getters<T>;
    // @ts-ignore
    result[getterName] = () => obj[key];
  }

  return result;
}

// استفاده
const featureGetters = createGetters(features);

featureGetters.getVersion(); // "1.0.0"
featureGetters.getDarkMode()(); // Dark mode enabled
featureGetters.getNewUI()(); // New UI activated
