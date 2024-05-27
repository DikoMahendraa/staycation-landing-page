import React from "react";
import { Button } from "./Button";
import { Minus, Plus } from "lucide-react";
import { DatePickerWithRange } from "./Datepicker";

export default function FormPickRoom() {
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
            <Button className="bg-red-400 py-6">
              <Minus />
            </Button>
            <span className="text-2xl text-gray-300">0</span>
            <Button className="bg-cyan-600 py-6">
              <Plus />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-cyan-800 mb-4">Pick a Date</p>
          <DatePickerWithRange />

          <p className="text-base font-light text-gray-300 mt-3">
            You will pay <span className="text-cyan-800">$480</span> USD per
            <span className="text-cyan-800">2 nights</span>
          </p>
          <Button size="lg" className="w-full bg-cyan-600 mt-12 text-base">
            Continue to Book
          </Button>
        </div>
      </div>
    </div>
  );
}
