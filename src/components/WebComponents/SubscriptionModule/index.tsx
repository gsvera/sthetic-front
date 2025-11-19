/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ObjectResponse, ResponseApi } from "@/api/responseApi";
import {
  CheckoutSessionStripeType,
  PlanCardProps,
  SessionStripe,
} from "@/constans/GeneralType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import "./index.scss";
import { useState } from "react";
import FormRegistry from "./FormRegistry";
import FormPrivacy from "./FormPrivacy";
import FormPlan from "./FormPlan";
import { useNotificationProvider } from "@/providers/NotificationProvider";
import apiProvider from "@/api/provider";
import dayjs from "dayjs";
import { getNameAppWork, parsePasswordEncrypt } from "@/utils/GeneralUtils";
import { PAYMENT_TYPE } from "@/constans/Constans";
import FormPay from "./FormPay";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { useSearchParams } from "next/navigation";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FormButtonApps from "./FormButtonApps";

export const SubscriptionModule = () => {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const queryClient = useQueryClient();
  const { WarningNotification, ErrorNotification } = useNotificationProvider();
  const [current, setCurrent] = useState(0);
  const [planSelected, setPlanSelected] = useState<PlanCardProps | null>(null);
  const [totalToPay, setTotalToPay] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [paySuccess, setPaySuccess] = useState(false);
  const [form] = Form.useForm();

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: (data: CheckoutSessionStripeType) =>
      apiProvider.createCheckoutSession(data),
    onSuccess: (data: ResponseApi) =>
      handleSuccessCreateCheckoutSession(data.data),
    onError: (err) => handleError(err),
  });

  const { mutate: createUser } = useMutation({
    mutationFn: (data: any) => apiProvider.saveUser(data),
    onSuccess: (data: ResponseApi) => handleSuccessSaveUser(data?.data),
    onError: (err) => handleError(err),
  });

  const handleSuccessSaveUser = (data: ObjectResponse) => {
    if (data.error) return ErrorNotification();
    setPaySuccess(true);
  };

  const handleSuccessCreateCheckoutSession = (data: ObjectResponse) => {
    if (data.error) return handleError(data.message);

    const sessionStripe = data.items as SessionStripe;
    window.location.href = sessionStripe.checkoutUrl;
  };

  const handleError = (err: any) => {
    // console.log(err);
    ErrorNotification();
  };

  const clickFormHandler = async () => {
    try {
      await form.validateFields();
      next();
    } catch (error) {
      console.log("❌ HAY ERRORES", error);
    }
  };

  const handleSelectPlan = (plan: PlanCardProps) => {
    setPlanSelected(plan);
    setCoupon("");
    queryClient.removeQueries({
      queryKey: [REACT_QUERY_KEYS.catalog.coupon.getByCode("get-coupon")],
    });
  };

  const handlerNextToPay = () => {
    if (planSelected) {
      next();
    } else {
      WarningNotification("Advertencia", "Debe seleccionar un plan");
    }
  };

  const makePayment = () => {
    if (planSelected) {
      const userData = {
        ...form.getFieldsValue(),
        password: parsePasswordEncrypt(
          form.getFieldValue("password") as string
        ),
        planSelect: planSelected?.id,
        idProfile: 2,
        createdAt: dayjs().toISOString(),
        paymentPlanDTO: {
          planId: planSelected?.id,
          amountPaid: totalToPay,
          paymentDate: dayjs().toISOString(),
          codeCoupon: coupon,
        },
      };
      if (totalToPay === 0) {
        userData.paymentPlanDTO.paymentMethod = PAYMENT_TYPE.FREE;
        createUser(userData);
      } else {
        userData.paymentPlanDTO.paymentMethod = PAYMENT_TYPE.STRIPE;
        createCheckoutSession({
          name:
            form.getFieldValue("firstName") +
            " " +
            form.getFieldValue("lastName"),
          email: form.getFieldValue("email"),
          amount: totalToPay,
          jsonData: JSON.stringify(userData),
          origin: origin || "web",
        });
      }
    } else {
      WarningNotification("Advertencia", "Debe seleccionar un plan");
    }
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleReturnApp = () => {
    getNameAppWork();
  };

  return (
    <div className="subcription-module">
      <div>
        <div
          className="background-img-company"
          style={{
            backgroundImage: `url(banner-work.jpeg)`,
          }}
        >
          <div className="banner-calendar">
            <div className="wd-10">
              <div className="text-center">
                <h1 className="title-banner-simple">
                  Crea una cuenta para ofrecer tus servicios profesionales
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-container">
          {paySuccess ? (
            <>
              <div className="success-pay content-center-xy">
                <div className="text-center">
                  <IoMdCheckmarkCircleOutline className="icon-success-notification" />
                  <br />
                  <p className="text-success">
                    Gracias, su pago se ha realizado con éxito
                  </p>
                </div>
              </div>
              <div>
                {origin ? (
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
            </>
          ) : (
            <>
              <div className={`slide ${current === 0 ? "active" : "hidden"}`}>
                <FormRegistry
                  formData={form}
                  formHandlerSubmit={clickFormHandler}
                />
              </div>
              <div className={`slide ${current === 1 ? "active" : "hidden"}`}>
                <FormPrivacy nextHandler={next} prevHandler={prev} />
              </div>
              <div className={`slide ${current === 2 ? "active" : "hidden"}`}>
                <FormPlan
                  nextHandler={handlerNextToPay}
                  prevHandler={prev}
                  planSelected={planSelected ? planSelected.id : 0}
                  handleSelectPlan={handleSelectPlan}
                />
              </div>
              <div className={`slide ${current === 3 ? "active" : "hidden"}`}>
                {planSelected && (
                  <FormPay
                    planSelected={planSelected}
                    totalToPay={totalToPay}
                    changeTotalToPay={setTotalToPay}
                    coupon={coupon}
                    changeCoupon={setCoupon}
                    prevHandler={prev}
                    handlerToPay={makePayment}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModule;
