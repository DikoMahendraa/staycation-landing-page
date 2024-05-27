import Image from "next/image";
import React from "react";

export default function ImageDetailRoom() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      <div className="col-span-1">
        <div className="relative w-full h-full">
          <Image src="/detail-village/big.jpg" fill priority alt="big.jpg" />
        </div>
      </div>
      <div className="col-span-1 grid-rows-2 space-y-8">
        <div>
          <div className="relative aspect-video">
            <Image
              src="/detail-village/small-1.jpg"
              fill
              priority
              alt="small-1.jpg"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-video">
            <Image
              src="/detail-village/small.jpg"
              fill
              priority
              alt="small.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
