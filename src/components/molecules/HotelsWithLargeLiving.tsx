import React from "react";
import { Label } from "../atoms/Label";
import { ContainHotelLiving } from "./contains/ContainHotelLiving";

type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  isPopular: boolean;
  description: string;
}>;

async function getData() {
  const response = await fetch(
    "http://localhost:3000/json/large-living-room.json"
  );
  return response.json();
}

export default async function HotelsWithLargeLiving() {
  const data: TResponseGetData = await getData();
  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Hotels with large living room
      </Label>
      <ContainHotelLiving data={data} />
    </div>
  );
}
