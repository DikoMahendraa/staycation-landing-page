"use client";

import HeaderBookingStep from "@/components/molecules/headers/HeaderBookingStep";
import React from "react";
import Step1 from "../molecules/steps/Step1";
import Step2 from "../molecules/steps/Step2";
import Step3 from "../molecules/steps/Step3";
import { atom, useAtomValue } from "jotai";

export const step = atom<number>(0);

export default function BookingDestination() {
  const _step = useAtomValue(step);

  const switchStep = () => {
    switch (_step) {
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 0:
      default:
        return <Step1 />;
    }
  };

  return (
    <main className="container mx-auto">
      <HeaderBookingStep step={3} currentStep={_step} />
      {switchStep()}
    </main>
  );
}
