import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="fixed bottom-[2%] right-[6px] flex flex-col w-max gap-12">
      <Link target="_blank" href="https://twitter.com/victor_booz">
        <div className="w-[64px]  aspect-square bg-white shadow-md text-blue-500 rounded-full flex items-center justify-center text-[1.6rem] transition-all duration-300 hover:text-white hover:bg-orange-500">
          <FaTwitter />
        </div>
      </Link>
      <Link target="_blank" href="https://t.me/victor_pham9x">
        <div className="w-[64px] aspect-square bg-white shadow-md text-blue-500 rounded-full flex items-center justify-center text-[1.6rem]  transition-all duration-300 hover:text-white hover:bg-orange-500">
          <FaTelegram />
        </div>
      </Link>
    </div>
  );
}
