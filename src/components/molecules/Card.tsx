import Image from "next/image";
import React from "react";

type TPropsCard = {
  images?: string;
  price?: string;
  name?: string;
  place?: string;
  className?: string;
  hasBadge?: boolean;
  badgeLabel?: string | React.ReactNode;
  type?: "large" | "small" | "medium";
  hasBottomDescription?: boolean;
  hasInsideDescription?: boolean;
  hasShadowImage?: boolean;
};

export default function Card({
  images,
  name,
  place,
  className,
  hasBadge = true,
  badgeLabel,
  type = "large",
  hasBottomDescription = false,
  hasInsideDescription = true,
  hasShadowImage = false,
}: TPropsCard) {
  return (
    <>
      <div className={className}>
        <Image src={String(images)} fill priority alt="most-picked-1" />
        {hasBadge && (
          <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
            <p className="font-light text-white">{badgeLabel}</p>
          </div>
        )}
        {hasInsideDescription && (
          <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
            <p className="font-semibold text-white text-2xl">{name}</p>
            <p className="font-light text-white text-lg">{place}</p>
          </div>
        )}

        {hasShadowImage && (
          <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
        )}
      </div>
      {hasBottomDescription && (
        <div className="mt-2">
          <p className="text-lg text-cyan-800 mb-1">{name}</p>
          <p className="text-base text-gray-400">{place}</p>
        </div>
      )}
    </>
  );
}
