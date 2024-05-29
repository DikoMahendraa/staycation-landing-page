import Image from "next/image";
import Link from "next/link";
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
  onClick?: () => void;
};

export default function Card({
  images,
  name,
  place,
  className = "relative",
  hasBadge = true,
  badgeLabel,
  type = "large",
  hasBottomDescription = false,
  hasInsideDescription = true,
  hasShadowImage = false,
  onClick,
}: TPropsCard) {
  return (
    <>
      <div onClick={onClick} className={className}>
        <Link href={String(name?.replaceAll(" ", "-").toLowerCase())}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={String(images)}
            fill
            priority
            alt="most-picked-1"
          />

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
        </Link>

        {hasShadowImage && (
          <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
        )}
      </div>
      {hasBottomDescription && (
        <div onClick={onClick} className="mt-2">
          <p className="text-lg text-cyan-800 mb-1">{name}</p>
          <p className="text-base text-gray-400">{place}</p>
        </div>
      )}
    </>
  );
}
