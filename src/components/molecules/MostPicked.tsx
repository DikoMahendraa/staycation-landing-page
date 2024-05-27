import React from "react";
import Card from "./Card";
import { Label } from "../atoms/Label";

export default function MostPicked() {
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
                <strong className="font-semibold">50%</strong> per night
              </>
            }
          />
        </div>
        <div className="col-span-8 grid grid-cols-2 gap-8">
          <div className="col-span-8 gap-4 grid grid-cols-2">
            <Card
              hasShadowImage
              price="$50"
              hasBadge={true}
              badgeLabel={
                <>
                  <strong className="font-semibold">50%</strong> per night
                </>
              }
              name="Blue Ocean"
              place="Jakarta, Indonesia"
              className="relative aspect-video rounded-2xl overflow-hidden"
              images="/most-picked/most-picked-big.png"
            />
            <Card
              hasShadowImage
              price="$50"
              name="Blue Ocean"
              hasBadge={true}
              badgeLabel={
                <>
                  <strong className="font-semibold">50%</strong> per night
                </>
              }
              place="Jakarta, Indonesia"
              className="relative aspect-video rounded-2xl overflow-hidden"
              images="/most-picked/most-picked-big.png"
            />
            <Card
              hasShadowImage
              price="$50"
              name="Blue Ocean"
              hasBadge={true}
              badgeLabel={
                <>
                  <strong className="font-semibold">50%</strong> per night
                </>
              }
              place="Jakarta, Indonesia"
              className="relative aspect-video rounded-2xl overflow-hidden"
              images="/most-picked/most-picked-big.png"
            />
            <Card
              hasShadowImage
              price="$50"
              name="Blue Ocean"
              hasBadge={true}
              badgeLabel={
                <>
                  <strong className="font-semibold">50%</strong> per night
                </>
              }
              place="Jakarta, Indonesia"
              className="relative aspect-video rounded-2xl overflow-hidden"
              images="/most-picked/most-picked-big.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
