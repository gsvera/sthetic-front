import LoadingView from "@/components/WebComponents/LoadingView";
import SubscriptionModule from "@/components/WebComponents/SubscriptionModule";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";

export default function Subcription() {
  return (
    <Suspense
      fallback={
        <div className="conent-loading-height">
          <LoadingView />
        </div>
      }
    >
      <AntdRegistry>
        <SubscriptionModule />
      </AntdRegistry>
    </Suspense>
  );
}
