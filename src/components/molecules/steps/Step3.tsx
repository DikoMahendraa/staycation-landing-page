import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";
import { LabelHeader } from "../HeaderBookingStep";

export default function Step3() {
  return (
    <>
      <LabelHeader label="Yeay completed" />
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="relative w-[360px] h-[360px]">
          <Image fill alt="completed-payment" src="/completed-payment.jpg" />
        </div>

        <p className="text-gray-400 text-lg w-1/3 text-center">
          We will inform you via email later once the transaction has been
          accepted
        </p>
      </div>

      <div className="flex justify-center items-center mt-24">
        <div className="flex flex-col gap-4 w-[20rem]">
          <Button size="lg" className="bg-cyan-800 text-base w-full">
            Back To Home
          </Button>
        </div>
      </div>
    </>
  );
}
