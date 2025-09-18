"use client";
import Image from "next/image";
import { SubmitButton } from "@/components/SubmitButton";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGuestRouter } from "@/hooks/guestRouter/useGuestRouter";

interface NavbarLinkProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, isActive, onClick }) => {
  return (
    <div
      className={`py-2 text-sm px-2 lg:py-1 lg:px-1 cursor-pointer hover:bg-primary-P50 lg:hover:bg-[#202020] ${isActive ? "text-white bg-[#202020] lg:bg-[#202020] lg:text-white lg:border-b-2 lg:border-white" : "text-grey-G100"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isActive, setIsActive] = useState(false);
  const router = useGuestRouter();
  const navbarRef = useRef<HTMLDivElement>(null);

  const navbarItems = [
    { title: "Beranda", path: "/" },
    // { title: "Kabar Desa", path: "/village-new" },
    { title: "Tentang", path: "/about-us" },
    { title: "Program dan Kegiatan", path: "/program-kegiatan" },
    { title: "Layanan Masyarakat", path: "/layanan-masyarakat" },
    { title: "Galeri", path: "/galeri" },
    // { title: "Lembaga", path: "/institution" },
    // { title: "Pembangunan", path: "/development" },
    // { title: "Layanan", path: "/service" },
    // { title: "Kontak", path: "/contact" },
  ];

  useEffect(() => {
    const index = navbarItems.findIndex((item) => item.path === router.pathname);
    setActiveIndex(index);

    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router.pathname, navbarItems]);

  const handleNavbarLinkClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsActive(false);
  };

  return (
    <div className="sticky top-0 z-50" ref={navbarRef}>
      <div
        className={`${isActive ? "bg-[#202020]" : "bg-[#202020]"} px-2 p-2 flex justify-between sm:flex sm:justify-between sm:py-5 sm:px-2 md:px-5 md:py-[20px] md:flex md:justify-between lg:flex lg:justify-between lg:px-5 lg:py-[15px]`}
      >
        <div className="flex items-center">
          <span className="text-semibold text-sm text-white">DESA PANULISAN TIMUR</span>
          {/* <Image src={"/images/kulakin.png"} width={102} height={38} alt="kulakin" /> */}
        </div>
        <div className="hidden sm:hidden md:hidden lg:flex lg:gap-4 lg:text-lg lg:text-grey-G100 lg:items-center">
          {navbarItems.map((item, index) => (
            <Link href={item?.path} key={index}>
              <NavbarLink text={item?.title} isActive={index === activeIndex} onClick={() => handleNavbarLinkClick(index)} />
            </Link>
          ))}
        </div>
        <div className="hidden sm:hidden md:flex md:justify-between gap-2 lg:hidden">
          {isActive ? (
            <SubmitButton onSubmit={() => setIsActive(!isActive)} className="w-12 h-5 border border-white-W400 rounded text-white">
              <div className="">
                <Image src={"/icons/back.svg"} width={24} height={24} alt="burger_button" className="inline-block mr-1" />
                <span className="text-grey-G500 font-medium">Close</span>
              </div>
            </SubmitButton>
          ) : (
            <>
              {/* <SubmitButton
                text="Masuk"
                onSubmit={() => window.open("https://store.kulakin.id/auth/login", "_blank")}
                className="w-28 h-5 bg-primary-P300 rounded text-white"
              /> */}
              <SubmitButton onSubmit={() => setIsActive(!isActive)} className="w-24 h-5 border border-white-W400 rounded text-white">
                <div className="">
                  <Image src={"/icons/burger.svg"} width={24} height={24} alt="burger_button" className="inline-block mr-1" />
                  <span className="text-grey-G75">Menu</span>
                </div>
              </SubmitButton>
            </>
          )}
        </div>
        <div className="flex justify-between sm:flex sm:justify-between md:hidden gap-2 lg:hidden">
          <div>
            {isActive ? (
              <SubmitButton onSubmit={() => setIsActive(!isActive)} className="w-6 h-5 border border-white-W400 rounded text-white">
                <div className="">
                  <Image src={"/icons/back.svg"} width={24} height={24} alt="burger_button" className="inline-block" />
                </div>
              </SubmitButton>
            ) : (
              <SubmitButton onSubmit={() => setIsActive(!isActive)} className="w-6 h-5 border border-white-W400 rounded text-white">
                <div className="">
                  <Image src={"/icons/burger.svg"} width={24} height={24} alt="burger_button" className="inline-block" />
                </div>
              </SubmitButton>
            )}
          </div>
        </div>
        {/* <div className="hidden sm:hidden md:hidden lg:flex lg:justify-between lg:gap-2">
          <SubmitButton
            text="Daftar"
            className="w-28 h-5 bg-grey-G500 rounded text-white"
            onSubmit={() => window.open("https://store.kulakin.id/auth/register", "_blank")}
          />
          <SubmitButton
            text="Masuk"
            onSubmit={() => window.open("https://store.kulakin.id/auth/login", "_blank")}
            className="w-28 h-5 bg-primary-P300 rounded text-white"
          />
        </div> */}
      </div>
      {isActive && (
        <div className="absolute z-50 md:top-10 bg-[#202020] w-full md:px-5 px-2 py-[23px] lg:px-10">
          {navbarItems.map((item, index) => (
            <Link href={item?.path} key={index}>
              <NavbarLink text={item?.title} isActive={index === activeIndex} onClick={() => handleNavbarLinkClick(index)} />
            </Link>
          ))}
          {/* <div className="mt-3">
            <SubmitButton
              text="Daftar"
              className="w-full h-5 bg-grey-G500 rounded text-white"
              onSubmit={() => window.open("https://store.kulakin.id/auth/register", "_blank")}
            />
            <SubmitButton
              text="Masuk"
              onSubmit={() => window.open("https://store.kulakin.id/auth/login", "_blank")}
              className="w-full mt-2 h-5 bg-primary-P300 rounded text-white"
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
