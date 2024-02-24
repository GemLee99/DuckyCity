// "use client";
import useBreakpoints from "@/src/hooks/useBreakpoints";
import Image from "next/image";
import Lands from "./components/Lands";
import Commission from "./components/Commission";
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
      <Lands />
      <p className="px-12 text-white">
        More feature will be update soon, Please keep follow me, Many Thanks!!!
      </p>
    </div>
  );
}
