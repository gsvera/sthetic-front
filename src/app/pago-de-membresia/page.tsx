import LoadingView from "@/components/WebComponents/LoadingView";
import MembershipPaymentModule from "@/components/WebComponents/MembershipPaymentModule";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
};

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
