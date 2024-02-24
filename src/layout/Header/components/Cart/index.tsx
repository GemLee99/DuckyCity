"use client";
import Link from "next/link";
import { memo } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
const Cart: React.FC = () => {
  return (
    <Link href="/gio-hang">
      <div className="flex justify-end px-24 ">
        <div className="p-8 bg-gray-100 rounded-md shadow-sank">
          <div className="relative flex justify-center p-6 rounded-lg  bg-secondaryGradient hover:scale-[1.05] duration-500 transition-all ">
            <TfiShoppingCartFull className="text-[1.2rem] text-white cursor-pointer " />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(Cart);
