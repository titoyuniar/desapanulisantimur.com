import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const DOMAIN = process.env.DOMAIN;
export const isLocalhost = () => DOMAIN === "localhost";
export const cookiesNextOptions = (param: Partial<ResponseCookie>): Partial<ResponseCookie> => {
  return {
    sameSite: isLocalhost() ?? "none",
    domain: DOMAIN,
    secure: true,
    ...param,
  };
};
