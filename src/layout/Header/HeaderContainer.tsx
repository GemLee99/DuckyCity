"use client";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
export default function HeaderContainer(props: { children: ReactNode }) {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHideHeader(scrollY > 140);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 w-full p-12 mx-0  bg-white  z-[999]  duration-300 transition-all shadow-md",
        {
          "-translate-y-[100%]": hideHeader,
          "-translate-y-[0%]": !hideHeader,
        }
      )}
    >
      {props.children}
    </header>
  );
}
