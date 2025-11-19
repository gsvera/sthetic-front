"use client";
import LoadingView from "@/components/WebComponents/LoadingView";
import { ContentThanks } from "@/components/WebComponents/ViewThanks/ContentThanks";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const ViewThanks = () => {
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

  return <ContentThanks sessionId={sessionId} />;
};

export default ViewThanks;
