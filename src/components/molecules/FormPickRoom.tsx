"use client";

import React from "react";
import { Button } from "../atoms/Button";
import { Minus, Plus } from "lucide-react";
import { DatePickerWithRange } from "../atoms/Datepicker";
import { atom, useAtomValue, useAtom } from "jotai";
import Link from "next/link";
import { detailCardItem } from "./contains/ContainMostPicked";

export const atomUnit = atom(1);

export default function FormPickRoom() {
  const [perNight, setPerNight] = useAtom(atomUnit);
  const { price } = useAtomValue(detailCardItem);

  return (
    <div className="cols-span-1 p-8">
      <div className="border rounded-xl border-gray-200 px-24 py-12">
        <p className="text-xl text-cyan-800">Start Booking</p>
        <p className="text-4xl text-gray-300 font-light mt-3">
          <span className="text-cyan-500 font-semibold">${price}</span> / night
        </p>
        <div className="mt-10">
          <p className="text-cyan-800 mb-4">How long you will stay?</p>
          <div className="flex bg-gray-100 rounded-sm justify-between items-center">
            <Button
              onClick={() => {
                if (perNight > 1) {
                  setPerNight(perNight - 1);
                }
              }}
              className="bg-red-400 py-6"
            >
              <Minus />
            </Button>
            <span
              className={`text-2xl ${
                perNight <= 1 ? " text-gray-300" : "text-cyan-800"
              }`}
            >
              {String(perNight)}
            </span>
            <Button
              onClick={() => {
                if (perNight >= 1) {
                  setPerNight(perNight + 1);
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
          <DatePickerWithRange howLong={perNight} />

          <p className="text-base font-light text-gray-300 mt-3">
            You will pay{" "}
            <span className="text-cyan-800">${perNight * price}</span> USD per
            <span className="text-cyan-800"> {perNight} nights</span>
          </p>
          <Link href="/booking/xyc-2xs2-mkl29-xnj361-z182">
            <Button
              disabled={perNight <= 0}
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
