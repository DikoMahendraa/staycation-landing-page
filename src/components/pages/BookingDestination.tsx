import HeaderBookingStep from "@/components/molecules/HeaderBookingStep";
import React from "react";
import Step1 from "../molecules/steps/Step1";
import Step2 from "../molecules/steps/Step2";
import Step3 from "../molecules/steps/Step3";

export default function BookingDestination() {
  return (
    <main className="container mx-auto">
      <HeaderBookingStep />

      <Step1 />
      <Step2 />
      <Step3 />
    </main>
  );
}
