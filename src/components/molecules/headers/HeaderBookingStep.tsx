import React from "react";

type TLabelHeader = {
  description?: string;
  label?: string;
};

export const LabelHeader = ({ label, description }: TLabelHeader) => {
  return (
    <div className="mt-14 text-center">
      <p className="text-4xl text-cyan-800 font-semibold">{label}</p>
      {description && (
        <p className="text-xl text-gray-400 font-light mt-4">{description}</p>
      )}
    </div>
  );
};

export default function HeaderBookingStep() {
  return (
    <div className="flex justify-center items-center mt-14">
      <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
        <p className="text-2xl">1</p>
      </div>
      <div className="h-1 w-40 bg-gray-300" />
      <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
        <p className="text-2xl">2</p>
      </div>
      <div className="h-1 w-40 bg-gray-300" />
      <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
        <p className="text-2xl">2</p>
      </div>
    </div>
  );
}
