import React from 'react';

interface ProgressBarProps {
  value: number; // Current value of the progress (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full relative ">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-red-500 rounded-l"></div>
      <div className="absolute top-0 left-1/4 w-1/4 h-full bg-orange-500"></div>
      <div className="absolute top-0 left-1/2 w-1/4 h-full bg-yellow-500"></div>
      <div className="absolute top-0 left-3/4 w-1/4 h-full bg-green-600 rounded-r"></div>
      <div className="rounded w-[5px] h-[16px] border border-white absolute -top-1 z-2 right-[1px] bg-green-600 rounded-r"></div>
      <div
        className="absolute top-0 h-full bg-blue-500"
        style={{ width: `${value}%`, borderRadius: '0.25rem' }}
      ></div>
      <div className="flex justify-around text-xs text-gray-500 -mt-5">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default ProgressBar;
