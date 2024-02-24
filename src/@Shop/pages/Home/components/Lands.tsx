"use client";

import duckyService from "@/src/@Shop/services/duckyService";
import systemService from "@/src/@Shop/services/duckyService";
import { useRequest } from "ahooks";
import Image from "next/image";

export default function Lands() {
  const { loading, data } = useRequest(duckyService.getLands);
  console.log("🚀 ~ Lands ~ data:", data);

  return (
    <>
      {/* <h2 className="p-6 font-bold text-center bg-white text-[1.6rem] mx-12 rounded-lg shadow-sank border text-blue-500">
        IsLands
      </h2> */}
      <div className="grid grid-cols-2 gap-12 p-12 xl:grid-cols-4">
        {loading ? (
          <>
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
            <LoadingLand />
          </>
        ) : (
          data?.data?.map((item) => <LandCard {...item} />)
        )}
      </div>
    </>
  );
}

export function LoadingLand() {
  return (
    <div className="flex flex-col gap-20 p-20 bg-white rounded-md drop-shadow-lg ">
      <div className="relative rounded-md bg-mainGradient shadow-sank aspect-square animate-pulse">
        <Image src="/loading_land.png" alt="hihi" layout="fill" />
      </div>
      <div className="p-4 font-bold text-center text-white bg-gray-500 rounded-md animate-pulse">
        IsLand: ###
      </div>
    </div>
  );
}

export function LandCard(props: any) {
  return (
    <div className="relative flex flex-col gap-20 transition-all duration-300 bg-white rounded-lg shadow-lg group hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-md bg-mainGradient shadow-sank aspect-square md:grayscale-[20%] group-hover:grayscale-0">
        <Image
          src={props?.image}
          alt={`Ducky city earn with vitor`}
          title={`Land: #${props.landId}`}
          layout="fill"
        />
      </div>
      {/* <div className="p-4 font-bold text-center text-blue-500 bg-white border rounded-md shadow-sank ">
        Id: {props.id}
      </div> */}
      <div className="absolute  text-white top-6 right-6 bg-secondaryGradient text-[1.2rem] md:text-[1.6rem] p-6 rounded-md shadow-lg">
        #{props?.landId}
      </div>
    </div>
  );
}

export function LandLog(props: { id?: string }) {}
