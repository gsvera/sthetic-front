"use client";
import LoadingView from "@/components/WebComponents/LoadingView";
import MembershipPaymentModule from "@/components/WebComponents/MembershipPaymentModule";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MembershipPayment() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = searchParams.get("userId");
  const origin = searchParams.get("origin");

  useEffect(() => {
    if (!userId) {
      router.push("/");
    }
  }, [userId, router]);

  if (!userId)
    return (
      <div className="conent-loading-height">
        <LoadingView />
      </div>
    );
  return <MembershipPaymentModule userId={userId} origin={origin} />;
}
