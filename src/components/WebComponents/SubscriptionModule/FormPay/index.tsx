import apiTypeService from "@/api/catalog";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import { CouponType, PlanCardProps } from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import { Button, Input } from "antd";
import { useEffect, useMemo, useState } from "react";
import LoadingView from "../../LoadingView";
import { convertCurrency } from "@/utils/GeneralUtils";

type formPayProps = {
  planSelected: PlanCardProps;
  totalToPay: number;
  coupon?: string;
  changeTotalToPay: (value: number) => void;
  changeCoupon: (value: string) => void;
  prevHandler: () => void;
  handlerToPay: () => void;
};

export const FormPay = ({
  planSelected,
  totalToPay,
  coupon,
  changeTotalToPay,
  changeCoupon,
  prevHandler,
  handlerToPay,
}: formPayProps) => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [sendData, setSendData] = useState(false);

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

  useEffect(() => {
    if (planSelected?.price) changeTotalToPay(planSelected?.price);
  }, [planSelected?.price, changeTotalToPay]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (coupon) setShouldFetch(true);
    }, 1000);
    return () => {
      clearTimeout(handler);
      setShouldFetch(false);
    };
  }, [coupon]);

  useEffect(() => {
    if (planSelected?.price)
      if (!coupon) return changeTotalToPay(planSelected?.price);
    if (couponValue) {
      changeTotalToPay(planSelected?.price - couponValue.discountAmount);
    } else {
      changeTotalToPay(planSelected?.price);
    }
  }, [couponValue, changeTotalToPay, planSelected, coupon]);

  const handleNextToPay = () => {
    setSendData(true);
    handlerToPay();
  };

  return (
    <div className="form-pay card-subcribe-module">
      <h3 className="title-form">Confirmación de pago</h3>
      <div className="content-space-between mt-20">
        <div className="label-form-pay">Plan seleccionado:</div>
        <div className="value-form-pay">{planSelected.name}</div>
      </div>
      <div className="content-space-between mt-20">
        <div className="label-form-pay">Costo:</div>
        <div className="value-form-pay">
          {convertCurrency(planSelected.price, 0)}
        </div>
      </div>
      <div className="content-space-between mt-20">
        <div className="label-form-pay">¿Tiene un cupón?:</div>
        <div className="value-form-pay">
          <Input
            className="text-center"
            onChange={(value) => changeCoupon(value.target.value)}
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
      <div className="content-btn-b-n">
        <Button className="btn-back" onClick={prevHandler}>
          Regresar
        </Button>
        <Button
          className={`${sendData ? "btn-submit-disable" : "btn-submit"}`}
          onClick={handleNextToPay}
          disabled={sendData}
        >
          Realizar pago
        </Button>
      </div>
      <div className="text-center">{sendData && <LoadingView />}</div>
    </div>
  );
};

export default FormPay;
