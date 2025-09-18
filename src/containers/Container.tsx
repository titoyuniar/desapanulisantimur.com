"use client";
import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
};
