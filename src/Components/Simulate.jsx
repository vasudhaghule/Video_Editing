
"use client";
import React, { useEffect, useState } from "react";

const Simulate = ({ trigger }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let prog = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 10) + 5; 
      
      prog = Math.min(100, prog + increment);
      setProgress(prog);
      if (prog >= 100) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, [trigger]);

  return (
    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-4">
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-gray-800">
        {progress}%
      </span>
    </div>
  );
};

export default Simulate;
