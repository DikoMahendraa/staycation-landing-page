"use client";

import React from "react";
import { Button } from "./Button";
import { HardDriveDownload, Minus, Plus } from "lucide-react";
import { DatePickerWithRange } from "./Datepicker";
import { atom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";

export const timePick = atom({
  howLong: 1,
  perNight: 280,
});

export default function FormPickRoom() {
  const { howLong, perNight } = useAtomValue(timePick);
  const setAtomVal = useSetAtom(timePick);

  return (
    <div className="cols-span-1 p-8">
      <div className="border rounded-xl border-gray-200 px-24 py-12">
        <p className="text-xl text-cyan-800">Start Booking</p>
        <p className="text-4xl text-gray-300 font-light mt-3">
          <span className="text-cyan-500 font-semibold">$280</span> / night
        </p>
        <div className="mt-10">
          <p className="text-cyan-800 mb-4">How long you will stay?</p>
          <div className="flex bg-gray-100 rounded-sm justify-between items-center">
            <Button
              onClick={() => {
                if (howLong > 1) {
                  setAtomVal((prev) => ({
                    ...prev,
                    howLong: prev.howLong - 1,
                  }));
                }
              }}
              className="bg-red-400 py-6"
            >
              <Minus />
            </Button>
            <span
              className={`text-2xl ${
                howLong <= 1 ? " text-gray-300" : "text-cyan-800"
              }`}
            >
              {String(howLong)}
            </span>
            <Button
              onClick={() => {
                if (howLong >= 1) {
                  setAtomVal((prev) => ({
                    ...prev,
                    howLong: prev.howLong + 1,
                  }));
                }
              }}
              className="bg-cyan-600 py-6"
            >
              <Plus />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-cyan-800 mb-4">Pick a Date</p>
          <DatePickerWithRange howLong={howLong} />

          <p className="text-base font-light text-gray-300 mt-3">
            You will pay{" "}
            <span className="text-cyan-800">${howLong * perNight}</span> USD per
            <span className="text-cyan-800"> {howLong} nights</span>
          </p>
          <Link href="/booking/xyc-2xs2-mkl29-xnj361-z182">
            <Button
              disabled={howLong <= 0}
              size="lg"
              className="w-full bg-cyan-600 mt-12 text-base"
            >
              Continue to Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
