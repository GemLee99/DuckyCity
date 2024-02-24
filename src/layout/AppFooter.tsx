import React from "react";

// import { FacebookFrame } from "@/components/frameSite/FacebookFrame";

const AppFooter: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-4 p-12 bg-white">
      <div className="flex items-center justify-center gap-4 p-6 text-white rounded-md bg-secondaryGradient">
        <img src="/logo.png" alt="itxgear" title="itxgear" width={30} />
        <p className="text-[0.8rem]">
          Creation and develop by Victor {thisYear}
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
