import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"], weight: "400" });
import type { Metadata } from "next";
import { AppLayout } from "@/src/layout/AppLayout";

interface RootLayout {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: "Ducky city - Farm with me #482",
  description: "Farm on my island and get 50% back, pay every weeek",
  icons: "/logo.png",
  keywords:
    "Duckycity, Ducky nft, how to play ducky city, how to play ducky, best farm ducky",
};

const RootLayout: React.FC<RootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>

        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
