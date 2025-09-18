import { getCookie } from "cookies-next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useGuestRouter = () => {
  const accessToken = getCookie("accessToken");
  const whatsappToken = getCookie("whatsappToken");
  const refreshToken = getCookie("refreshToken");
  const nRouter = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const router = {
    // conditional push for guest
    push: (url: string) => {
      if (accessToken && refreshToken) nRouter.push(url);
      else if (whatsappToken) nRouter.push("/login");
      else nRouter.push("/login");
    },
    // regular router push
    memberPush: nRouter.push,
    back: nRouter.back,
    pathname: pathname,
    query: searchparams,
  };

  return router;
};
