import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { AtomEffect } from "recoil";

export function clientCookieEffect<T>(key: string): AtomEffect<T> {
  const clientCookie = {
    get: () => {
      const data = getCookie(key);

      try {
        return JSON.parse(data as string);
      } catch (err) {
        console.log(err);
      }
    },
    set: (newValue: T) => {
      console.log(newValue);
      setCookie(key, JSON.stringify({ value: newValue }));
    },
    delete: () => {
      deleteCookie(key);
    },
  };

  return ({ setSelf, onSet, trigger }) => {
    const loadPersisted = () => {
      const data = clientCookie.get();
      if (data !== null && data !== undefined) setSelf(data.value);
    };
    if (trigger === "get") loadPersisted();
    onSet((newValue, oldValue, isReset) => {
      isReset ? clientCookie.delete() : clientCookie.set(newValue);
    });
  };
}
