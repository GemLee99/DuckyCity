"use client";
import React, { ReactNode, Suspense, useContext, useState } from "react";
import Header from "./Header";
import AppFooter from "./AppFooter";
import { useYupDefaultMessage } from "../helper/Yup";
import { createContext } from "react";
import Spin from "../@Core/components/loading/Spin";

type Props = {
  children: ReactNode;
};

const LayoutContext = createContext<any>(null);
export const useLayoutContext = () => useContext(LayoutContext);

export const AppLayout: React.FC<Props> = ({ children }) => {
  useYupDefaultMessage();

  // const [openMobileMenu, setOpenMobileMenu] = useState(false)
  // function handleOpenMobileMenu() {
  // 	setOpenMobileMenu(true)
  // }
  // function handleCloseMobileMenu() {
  // 	setOpenMobileMenu(false)
  // }

  return (
    // <LayoutContext.Provider value={{ openMobileMenu, handleOpenMobileMenu, handleCloseMobileMenu }}>
    <section className="relative z-0 w-full mx-auto bg-gray-200 ">
      <Header />
      <section className="w-full mx-auto">
        <Suspense
          fallback={
            <div className="fixed w-screen h-screen z-[999] flex items-center justify-center bg-gray-50">
              <Spin />
            </div>
          }
        >
          {children}
        </Suspense>
      </section>
      <AppFooter />
    </section>
    // </LayoutContext.Provider>
  );
};
