import React from "react";
import { LabelHeader } from "../HeaderBookingStep";
import Image from "next/image";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { Button } from "@/components/atoms/Button";
import { InputFile } from "@/components/atoms/InputFile";

export default function Step2() {
  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />

      <div className="mt-24 grid grid-cols-2 gap-8">
        <div className="col-span-1 border-r-2 border-0 border-gray-200 pl-20">
          <p className="text-lg text-cyan-800">Transfer Pembayaran:</p>
          <p className="text-base text-cyan-800 mt-5">
            Tax: <strong>10%</strong>
          </p>
          <p className="text-base text-cyan-800 my-3">
            Sub total: <strong>$480 USD</strong>
          </p>
          <p className="text-base text-cyan-800">
            Total: <strong>$580 USD</strong>
          </p>

          <div className="flex gap-4 mt-12">
            <div className="relative h-[30px] w-[60px]">
              <Image fill alt="image-bank-bca" src="/logo-bank/logo_bank.jpg" />
            </div>
            <div>
              <p className="text-base text-cyan-900">Bank Central Asia</p>
              <p className="text-base text-cyan-900">2208 1996</p>
              <p className="text-base text-cyan-900">BuildWith Angga</p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="relative h-[30px] w-[60px]">
              <Image
                fill
                alt="image-bank-bca"
                src="/logo-bank/logo_bank-1.jpg"
              />
            </div>
            <div>
              <p className="text-base text-cyan-900">Bank Mandiri</p>
              <p className="text-base text-cyan-900">2208 1996</p>
              <p className="text-base text-cyan-900">BuildWith Angga</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputFile
            label="Upload Bukti Transfer"
            type="file"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Asal Bank"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Nama Pengirim"
            placeholder="Please type here ..."
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-24">
        <div className="flex flex-col gap-4 w-[20rem]">
          <Button size="lg" className="bg-cyan-800 text-base w-full">
            Continue to Book
          </Button>

          <Button size="lg" className="bg-gray-200 text-base w-full">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
