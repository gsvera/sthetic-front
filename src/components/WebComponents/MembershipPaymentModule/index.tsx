/* eslint-disable @typescript-eslint/no-explicit-any */
import apiTypeService from "@/api/catalog";
import apiProvider from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ObjectResponse, ResponseApi } from "@/api/responseApi";
import {
  CheckoutSessionStripeType,
  CouponType,
  SessionStripe,
  UserPlan,
  UserSimpleDataType,
} from "@/constans/GeneralType";
import { convertCurrency, getNameAppWork } from "@/utils/GeneralUtils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { useEffect, useMemo, useState } from "react";
import LoadingView from "../LoadingView";
import { PAYMENT_TYPE } from "@/constans/Constans";
import "./index.scss";
import { useNotificationProvider } from "@/providers/NotificationProvider";
import dayjs from "dayjs";
import FormButtonApps from "../SubscriptionModule/FormButtonApps";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type membershipPaymentModuleProps = {
  userId: string;
  origin: string | null;
};
export const MembershipPaymentModule = ({
  userId,
  origin,
}: membershipPaymentModuleProps) => {
  const { ErrorNotification } = useNotificationProvider();
  const [sendData, setSendData] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [totalToPay, setTotalToPay] = useState(0);
  const [paySuccess, setPaySuccess] = useState(false);

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: (data: CheckoutSessionStripeType) =>
      apiProvider.createCheckoutSession(data),
    onSuccess: (data: ResponseApi) =>
      handleSuccessCreateCheckoutSession(data.data),
    onError: (err) => handleError(err),
  });

  const { mutate: savePaySstripe } = useMutation({
    mutationFn: (data: any) => apiProvider.savePayStripe(data),
    onSuccess: (data: ResponseApi) => handleSuccessSavePayStripe(data.data),
    onError: (err) => handleError(err),
  });

  const handleError = (err: any) => {
    ErrorNotification();
  };

  const handleSuccessSavePayStripe = (data: ObjectResponse) => {
    if (data.error) return ErrorNotification();
    setPaySuccess(true);
  };

  const handleSuccessCreateCheckoutSession = (data: ObjectResponse) => {
    if (data.error) return handleError(data.message);

    const sessionStripe = data.items as SessionStripe;
    window.location.href = sessionStripe.checkoutUrl;
  };

  const { data: simpleDataUser, isLoading: isLoadingSimpleDataUser } = useQuery(
    {
      queryKey: [REACT_QUERY_KEYS.provider.getSimpleDataProvider(userId)],
      queryFn: () => apiProvider.getSimpleDataByprovider(userId),
      ...{
        select: (data: ResponseApi) => data.data,
        enabled: Boolean(userId),
      },
    }
  );
  const { data: planData, isLoading: isLoadingPlanData } = useQuery({
    queryKey: [REACT_QUERY_KEYS.provider.getproviderToPayMembership(userId)],
    queryFn: () => apiProvider.getPlanByUser(userId),
    ...{
      select: (data: ResponseApi) => data.data.items as UserPlan,
    },
  });

  const { data: couponData, isFetching: isFetchingCoupon } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.coupon.getByCode("get-coupon")],
    queryFn: () => apiTypeService.getCoupon({ code: coupon as string }),
    ...{
      enabled: shouldFetch,
      select: (data: ResponseApi) => data.data,
    },
  });

  const couponValue = useMemo(() => {
    if (!couponData?.error) return couponData?.items as CouponType;
  }, [couponData]);

  const userInfo = useMemo(() => {
    if (!simpleDataUser?.error)
      return simpleDataUser?.items as UserSimpleDataType;
  }, [simpleDataUser]);

  useEffect(() => {
    if (planData) {
      setTotalToPay(planData.catalogPlanDTO.price);
    }
    if (planData && couponValue) {
      setTotalToPay(
        planData?.catalogPlanDTO.price - couponValue.discountAmount
      );
    }
    if (!coupon) {
      if (planData) setTotalToPay(planData.catalogPlanDTO.price);
    }
  }, [planData, couponValue, coupon]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (coupon) setShouldFetch(true);
    }, 1000);
    return () => {
      clearTimeout(handler);
      setShouldFetch(false);
    };
  }, [coupon]);

  const makePayment = () => {
    if (userInfo) {
      setSendData(true);
      const paymentPlanDTO = {
        idUser: userId,
        planId: planData?.catalogPlanDTO.id,
        amountPaid: totalToPay,
        paymentDate: dayjs().toISOString(),
        createdAt: dayjs().toISOString(),
        paymentMethod:
          totalToPay === 0 ? PAYMENT_TYPE.FREE : PAYMENT_TYPE.STRIPE,
        codeCoupon: coupon,
      };
      if (totalToPay === 0) {
        paymentPlanDTO.paymentMethod = PAYMENT_TYPE.FREE;
        savePaySstripe(paymentPlanDTO);
      } else {
        createCheckoutSession({
          name: userInfo.firstName + " " + userInfo.lastName,
          email: userInfo.email,
          amount: totalToPay,
          origin: origin || "web",
          userId: userId,
          jsonData: JSON.stringify(paymentPlanDTO),
        });
      }
    }
  };

  const handleReturnApp = () => {
    getNameAppWork();
  };

  return (
    <div className="membership-payment-module">
      <div
        className="background-general-img"
        style={{
          backgroundImage: `url(banner-work.jpeg)`,
        }}
      >
        <div className="banner-shadow-general">
          <div className="wd-10">
            <div className="text-center">
              <h1 className="title-banner-simple">Pago de membresia</h1>
            </div>
          </div>
        </div>
      </div>
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
          <div className="form-pay card-subcribe-module">
            <h3 className="title-form">Datos del usuario</h3>
            {isLoadingSimpleDataUser ? (
              <LoadingView />
            ) : (
              <>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Nombre:</div>
                  <div className="value-form-pay">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </div>
                </div>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Número de teléfono</div>
                  <div className="value-form-pay">
                    {userInfo?.lada} {userInfo?.phone}
                  </div>
                </div>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Email</div>
                  <div className="value-form-pay">{userInfo?.email}</div>
                </div>
              </>
            )}
          </div>
          <div className="form-pay card-subcribe-module">
            <h3 className="title-form">Confirmación de pago</h3>
            {isLoadingPlanData ? (
              <LoadingView />
            ) : (
              <>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Plan seleccionado:</div>
                  <div className="value-form-pay">
                    {planData?.catalogPlanDTO.name}
                  </div>
                </div>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Costo:</div>
                  <div className="value-form-pay">
                    {convertCurrency(planData?.catalogPlanDTO.price, 0)}
                  </div>
                </div>
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">¿Tiene un cupón?:</div>
                  <div className="value-form-pay">
                    <Input
                      className="text-center"
                      onChange={(value) => setCoupon(value.target.value)}
                      value={coupon}
                    />
                  </div>
                </div>
                {coupon &&
                  (isFetchingCoupon ? (
                    <LoadingView />
                  ) : couponData ? (
                    <div className="content-space-between mt-20">
                      <div>
                        <div className="label-form-pay">Descuento de:</div>
                      </div>
                      <div>
                        {couponData.error && (
                          <div className="text-error">{couponData.message}</div>
                        )}
                        {couponValue && couponValue.discountAmount && (
                          <div className="value-form-pay">
                            {convertCurrency(couponValue.discountAmount, 0)}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  ))}
                <div className="content-space-between mt-20">
                  <div className="label-form-pay">Total a pagar:</div>
                  <div className="value-form-pay">
                    {totalToPay === 0 ? "$0" : convertCurrency(totalToPay, 0)}
                  </div>
                </div>
              </>
            )}
            <div className="content-btn-b-n">
              <Button
                className={`${sendData ? "btn-submit-disable" : "btn-submit"}`}
                onClick={makePayment}
                disabled={sendData}
              >
                Realizar pago
              </Button>
            </div>
            <div className="text-center">{sendData && <LoadingView />}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MembershipPaymentModule;
