"use client";
import LoadingView from "@/components/WebComponents/LoadingView";
import MembershipPaymentModule from "@/components/WebComponents/MembershipPaymentModule";

import { Suspense } from "react";

export default function MembershipPayment() {
  return (
    <Suspense
      fallback={
        <div className="conent-loading-height">
          <LoadingView />
        </div>
      }
    >
      <MembershipPaymentModule />
    </Suspense>
  );
  return;
}
