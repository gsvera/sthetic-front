"use client";
import apiProvider from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FormButtonApps from "../SubscriptionModule/FormButtonApps";
import "./index.scss";
import { getNameAppWork } from "@/utils/GeneralUtils";
import { useEffect, useMemo } from "react";
import { ResponsePaymentCheckoutType } from "@/constans/GeneralType";
import { STATUS_PAYMENT } from "@/constans/Constans";

type viewThanksProps = {
  sessionId: string;
};
export const ViewThanks = ({ sessionId }: viewThanksProps) => {
  const queryClient = useQueryClient();
  const { data: sessionStripeData } = useQuery({
    queryKey: [REACT_QUERY_KEYS.stripe.getSessionStripe(sessionId)],
    queryFn: () => apiProvider.getSessionStripe(sessionId),
    ...{
      select: (data: ResponseApi) => data.data,
      enabled: Boolean(sessionId),
    },
  });

  const sessionStripe = useMemo(() => {
    if (!sessionStripeData?.error)
      return sessionStripeData?.items as ResponsePaymentCheckoutType;
  }, [sessionStripeData]);

  useEffect(() => {
    if (sessionStripe?.statusPayment === STATUS_PAYMENT.PENDING) {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: [REACT_QUERY_KEYS.stripe.getSessionStripe(sessionId)],
        });
      }, 1500);
    }
  }, [sessionStripe, queryClient, sessionId]);

  const handleReturnApp = () => {
    getNameAppWork();
  };

  return (
    <div className="view-thanks">
      <div
        className="background-general-img"
        style={{
          backgroundImage: `url(banner-work.jpeg)`,
        }}
      >
        <div className="banner-shadow-general">
          <div className="wd-10">
            <div className="text-center">
              {sessionStripe?.statusPayment === STATUS_PAYMENT.COMPLETED ? (
                <h1 className="title-banner-simple">Gracias por tu pago</h1>
              ) : (
                <h1 className="title-banner-simple">
                  Se esta procesando su pago
                </h1>
              )}
            </div>
            <div className="wd-6 content-center content-center-mob m-horizontal-auto">
              {sessionStripe && sessionStripe.origin !== "web" ? (
                <div className="content-center content-center-mob">
                  <button
                    className={"return-btn-app"}
                    type="button"
                    onClick={handleReturnApp}
                  >
                    Regresar a la aplicación
                  </button>
                </div>
              ) : (
                <FormButtonApps />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewThanks;
