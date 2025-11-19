"use client";
import LoadingView from "@/components/WebComponents/LoadingView";
import ViewThanks from "@/components/WebComponents/ViewThanks";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Thanks() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("sessionId");

  useEffect(() => {
    if (!sessionId) {
      router.push("/");
    }
  }, [sessionId, router]);

  if (!sessionId)
    return (
      <div className="conent-loading-height">
        <LoadingView />
      </div>
    );

  return <ViewThanks sessionId={sessionId} />;
}
