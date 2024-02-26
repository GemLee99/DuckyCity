"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date() as any;
      const targetDate = getNextSunday17UTC(now) as any;
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        setRemainingTime(timeDifference);
      } else {
        setRemainingTime(0);
        clearInterval(timerInterval);
      }
    };

    // Cập nhật thời gian mỗi giây
    const timerInterval = setInterval(calculateRemainingTime, 1000);

    // Xóa interval khi component unmount
    return () => clearInterval(timerInterval);
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi mount

  // Chuyển đổi thời gian từ miliseconds thành định dạng "2 Days 2:40:24"
  const formatTime = (time: any) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days} Days ${hours}:${minutes}:${seconds}`;
  };

  const getNextSunday17UTC = (currentDate: any) => {
    const dayOfWeek = currentDate.getUTCDay();
    const daysUntilNextSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    const nextSunday = new Date(
      currentDate.getTime() + daysUntilNextSunday * 24 * 60 * 60 * 1000
    );
    nextSunday.setUTCHours(17, 0, 0, 0);
    return nextSunday;
  };

  return (
    <div className="flex flex-col gap-12">
      <h2 className="p-6 pixel font-bold text-center bg-white text-[1.6rem] mx-12 rounded-lg shadow-sank border text-purple-500">
        Next Time
      </h2>
      <p className="text-[0.6rem] md:text-[0.8rem] w-4/5 p-12 mx-auto text-pink-500 bg-white border-4 border-white rounded-md pixel shadow-sank">
        Every Sunday, at 17:00 UTC, I will announce the list of active members
        on my island and award prizes. Thank you for your hard work
      </p>
      <div className="bg-gray-100 border shadow-2xl rounded-2xl aspect-[21/4] flex items-center justify-center text-[1rem] mx-12 desktop:mx-0 md:text-[3rem] pixel  text-orange-600">
        {formatTime(remainingTime)}
      </div>
    </div>
  );
};

export default CountdownTimer;
