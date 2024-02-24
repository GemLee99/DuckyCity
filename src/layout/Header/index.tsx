// "use client";
import Image from "next/image";
// import SearchBox from "./components/SearchBox";
// import Cart from "./components/Cart";
import Link from "next/link";
import HeaderContainer from "./HeaderContainer";
// import MobileDrawer from "./components/MobileDrawer";
// import useBreakpoints from "@/src/hooks/useBreakpoints";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="max-w-[1600px] lg:px-20 flex mx-auto items-center justify-between ">
        <h1 className="hidden">Ducky city farm - Vitor Guide</h1>
        <div className="relative flex items-center w-1/2 gap-6">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={48}
              height={1}
              title="Duckycity guide Victor"
              alt="Duckycity guide Victor"
            />
          </Link>
          <span className="text-transparent text-[1rem] md:text-[2rem] font-bold rounded-md shadow-sank bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text">
            Victor Farm
          </span>
        </div>
        <div className="flex gap-6 items-centr">
          {/* <span className="font-bold text-gray-500">News (Comming soon)</span> */}
          <span className="font-bold text-gray-500">Guide (Comming soon)</span>
        </div>
        {/* {tablet ? (
					<div className="flex justify-center w-1/3 ">
						<SearchBox />
					</div>
				) : (
					<MobileDrawer />
				)} */}

        {/* <div className="w-1/3">
					<Cart />
				</div> */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
