import React from "react";
import Card from "./Card";
import { Label } from "../atoms/Label";

type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  isPopular: boolean;
}>;

async function getData() {
  const response = await fetch("http://localhost:3000/json/most-picked.json");
  return response.json();
}

export default async function MostPicked() {
  const data: TResponseGetData = await getData();

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">Most Picked</Label>
      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-4 flex items-stretch">
          <Card
            hasShadowImage
            price="$50"
            name="Blue Ocean"
            place="Jakarta, Indonesia"
            className="relative w-full h-full rounded-2xl overflow-hidden"
            images="/most-picked/most-picked-big.png"
            hasBadge={true}
            badgeLabel={
              <>
                <strong className="font-semibold">{data[0].price}%</strong> per
                night
              </>
            }
          />
        </div>
        <div className="col-span-8 grid grid-cols-2 gap-8">
          {data.map((item, index) => {
            console.log(item.image);
            if (index !== 0) {
              return (
                <Card
                  key={index}
                  hasShadowImage
                  price={String(item.price)}
                  hasBadge={true}
                  badgeLabel={
                    <>
                      <strong className="font-semibold">{item.price}$</strong>{" "}
                      per night
                    </>
                  }
                  name={item.name}
                  place={item.location}
                  className="relative aspect-video rounded-2xl overflow-hidden"
                  images={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
