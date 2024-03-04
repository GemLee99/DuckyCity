// "use client";
// import useBreakpoints from "@/src/hooks/useBreakpoints";
// import Image from "next/image";
import Lands from "./components/Lands";
import Commission from "./components/Commission";
import CountdownTimer from "./components/Timer";
import Contact from "./components/Contact";
import Link from "next/link";
// import CarouselProductBox from '../../components/ProductBox/CarouselProductBox'
// import { FaStar } from 'react-icons/fa6'

export default async function HomePage() {
  // const { loading, data } = useCarouselProduct();
  // console.log("🚀 ~ file: index.tsx:27 ~ HomePage ~ data:", data);
  // const { eventDynamicTooltip, renderToolTip } = useDynamicToolTip(<>123</>)
  //   const { mobile } = useBreakpoints();
  return (
    <div
      //   style={{
      //     backgroundImage: mobile
      //       ? 'url("/images/bg_mobile.jpeg")'
      //       : 'url("/images/bg_desktop.jpeg")',
      //   }}
      className="bg-secondaryGradient h-[90vh] flex flex-col gap-20 md:p-40 overflow-y-scroll"
    >
      <h1 className="hidden">
        Duckycity farm on my island and get back your 50% rewards every week!!!
      </h1>
      <Commission />
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2 md:min-h-[50vh]">
        <div className="bg-white md:px-32 md:border-4 md:rounded-2xl md:border-white md:shadow-2xl md:py-24">
          <CountdownTimer />
          <div className="flex flex-col items-center justify-center gap-4 my-24">
            <p className="text-[1.2rem] font-[600] pixel">
              Lastweek activities list (26/2-3/3)
            </p>
            <Link
              className="font-bold text-blue-500 pixel"
              target="_blank"
              href="https://r5ti1gkcf4u.sg.larksuite.com/wiki/WLAhwYbISiXaZRkKV2GlHU0qg9b?from=from_copylink"
            >
              Link
            </Link>
            <p className="pixel text-[0.6rem]">
              Please DM me and send me full address, Thank your for your hard
              work!!!{" "}
            </p>
          </div>
        </div>
        <div className=" md:px-32 md:border-4 md:rounded-2xl md:border-white md:shadow-2xl md:py-24">
          <Lands />
        </div>
      </div>

      <p className="p-12 bg-white pixel text-[0.8rem] my-12 text-red-500">
        More feature will be update soon, Please keep follow me, Many Thanks!!!
      </p>
      <Contact />
    </div>
  );
}
