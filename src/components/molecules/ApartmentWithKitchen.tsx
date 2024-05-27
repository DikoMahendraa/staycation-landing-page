import React from "react";
import { Label } from "../atoms/Label";
import Card from "./Card";

export default function ApartmentWithKitchen() {
  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Apartments with kitchen set
      </Label>

      <div className="grid grid-cols-4 gap-8 mt-5">
        <div>
          <Card
            hasBadge
            badgeLabel={
              <>
                <strong>Popular</strong> Choice
              </>
            }
            images="/beauty-backyard/pic-1.jpg"
            className="relative aspect-video"
            name="Tabby Town"
            place="Gunung Batu, Indonesia"
            hasInsideDescription={false}
            hasBottomDescription
          />
        </div>
        <div>
          <Card
            hasBadge={false}
            images="/beauty-backyard/pic-1.jpg"
            className="relative aspect-video"
            hasInsideDescription={false}
            name="Tabby Town"
            hasBottomDescription
            place="Gunung Batu, Indonesia"
          />
        </div>
        <div>
          <Card
            hasBadge={false}
            hasInsideDescription={false}
            images="/beauty-backyard/pic-1.jpg"
            className="relative aspect-video"
            name="Tabby Town"
            hasBottomDescription
            place="Gunung Batu, Indonesia"
          />
        </div>
        <div>
          <Card
            hasInsideDescription={false}
            hasBadge={false}
            hasBottomDescription
            images="/beauty-backyard/pic-1.jpg"
            className="relative aspect-video"
            name="Tabby Town"
            place="Gunung Batu, Indonesia"
          />
        </div>
      </div>
    </div>
  );
}
