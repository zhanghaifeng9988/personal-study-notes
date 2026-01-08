// 这个 Storage 对象提供了一套方便的方法来操作浏览器的
// localStorage 和 sessionStorage，
//支持设置值、获取值（带过期时间检查）、删除值和清空所有值。
//通过泛型 T，可以灵活地处理不同类型的值。

interface StorageItem<T> {
  value: T;
  expiry?: number; // 可选的过期时间戳
}
export const Storage = {//定义存储对象
  // 从指定的存储类型（localStorage 或 sessionStorage）中获取指定键（key）的值。
  get<T>(
    key: string,
    storageType: "localStorage" | "sessionStorage" = "localStorage"//localStorage是默认值
  ): T | null {//如果键存在且未过期，则返回对应的值，类型为 T；否则返回 null。
    const storage =
      storageType === "sessionStorage" ? sessionStorage : localStorage;
    const item = storage.getItem(key);
    if (item) {
      const { value, expiry } = JSON.parse(item) as StorageItem<T>;//类型断言
      if (expiry && Date.now() > expiry) {
        storage.removeItem(key);
        return null;
      }
      return value;
    }
    return null;
  },
  // 设置值，
  //在指定的存储类型中设置指定键的值，并可设置过期时间。
  set<T>(
    key: string,
    value: T,
    expiry?: number,
    storageType: "localStorage" | "sessionStorage" = "localStorage"
  ): void {
    const storage =
      storageType === "sessionStorage" ? sessionStorage : localStorage;
    const item: StorageItem<T> = { value };
    if (expiry) {
      item.expiry = Date.now() + expiry;
    }
    storage.setItem(key, JSON.stringify(item));
  },
  // 删除值
  // 从指定的存储类型中删除指定键的值。
  remove(
    key: string,
    storageType: "localStorage" | "sessionStorage" = "localStorage"
  ): void {
    const storage =
      storageType === "sessionStorage" ? sessionStorage : localStorage;
    storage.removeItem(key);
  },
  // 清空指定存储类型中的所有值
  clear(storageType: "localStorage" | "sessionStorage" = "localStorage"): void {
    const storage =
      storageType === "sessionStorage" ? sessionStorage : localStorage;
    storage.clear();
  },
};