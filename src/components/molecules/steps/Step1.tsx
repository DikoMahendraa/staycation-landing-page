import Image from "next/image";
import React from "react";
import { InputWithLabel } from "../../atoms/InputWithLabel";
import { LabelHeader } from "../headers/HeaderBookingStep";
import { Button } from "@/components/atoms/Button";
import { useSetAtom } from "jotai";
import { step } from "@/components/pages/BookingDestination";
import Link from "next/link";

export default function Step1() {
  const setStep = useSetAtom(step);

  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />
      <div className="mt-24 grid grid-cols-2 gap-8">
        <div className="col-span-1 border-r-2 border-0 border-gray-200 pr-12">
          <div className="relative aspect-video">
            <Image
              src="/beauty-backyard/pic-1.jpg"
              fill
              priority
              alt="beauty-backyard-1"
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className="capitalize text-cyan-800 text-2xl font-semibold">
                Podo Wae
              </p>
              <p className="capitalize text-gray-300 text-lg">
                Madiun, Indonesia
              </p>
            </div>
            <p className="text-2xl font-light text-gray-300">
              <span className="text-cyan-800 font-semibold">$480 USD</span> /
              night
            </p>
          </div>
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputWithLabel
            label="First Name"
            type="email"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Last Name"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Email Address"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Phone Number"
            placeholder="Please type here ..."
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-24">
        <div className="flex flex-col gap-4 w-[20rem]">
          <Button
            onClick={() => setStep(1)}
            size="lg"
            className="bg-cyan-800 text-base w-full"
          >
            Continue to Book
          </Button>

          <Link href="/xyc-2xs2-mkl29-xnj361-z182">
            <Button size="lg" className="bg-gray-200 text-base w-full">
              Cancel
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
