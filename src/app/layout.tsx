"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";
import { Container } from "@/containers/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const metadata: Metadata = {
//   title: "Kulakin",
//   description: "Kulakin Landing Page",
// };

const ReactQueryProvider = dynamic(() => import("@/context").then((Component) => Component.ReactQueryProvider), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <ToastContainer />
          <ReactQueryProvider>
            <Container>{children}</Container>
          </ReactQueryProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
