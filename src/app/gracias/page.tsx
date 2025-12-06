import ViewThanks from "@/components/WebComponents/ViewThanks";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  robots: "noindex,nofollow",
};

export default function Page() {
  return (
    <Suspense>
      <ViewThanks />
    </Suspense>
  );
}
