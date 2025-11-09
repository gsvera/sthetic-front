/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiProvider } from "@/api/provider";
import { ObjectResponse, ResponseApi } from "@/api/responseApi";
import { useEffect, useMemo, useState } from "react";
import { DatePicker, Input, Select } from "antd";
import "./index.scss";
import {
  LadaType,
  MenuServiceType,
  PublicInfoProviderType,
  ScheduleServiceType,
  TimeScheduleType,
} from "@/constans/GeneralType";
import {
  convertDateToGeneralFormat,
  convertHourToAMorPM,
  disablePastDates,
} from "@/utils/GeneralUtils";
import "dayjs/locale/es";
import dayjs from "dayjs";
import LoadingView from "@/components/WebComponents/LoadingView";
import { OptionTime } from "@/components/WebComponents/ScheduleDate/OptionTime";
import EmptyView from "@/components/WebComponents/EmptyView";
import { FORMAT_DATE, REGEX, STATUS_SERVICE } from "@/constans/Constans";
import { OptionService } from "@/components/WebComponents/ScheduleDate/OptionService";
import apiTypeService from "@/api/catalog";
import Link from "next/link";
import ButtonKnowMore from "@/components/WebComponents/Buttons/ButtonKnowMore";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useNotificationProvider } from "@/providers/NotificationProvider";

dayjs.locale("es"); // Esta config se debera establecer a futuro para ingles tambien

interface scheduleProps {
  token: string;
}

export const ScheduleDate = ({ token }: scheduleProps) => {
  const { ErrorNotification } = useNotificationProvider();
  const [showError, setShowError] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [blockTime, setBlockTime] = useState<TimeScheduleType[]>([]);
  const [selectedTime, setSelectedTime] = useState<TimeScheduleType | null>(
    null
  );
  const [selectedService, setSelectedService] =
    useState<MenuServiceType | null>(null);
  const [dateSelected, setDateSelected] = useState({
    day: "",
    date: "",
  });
  const [infoClient, setInfoClient] = useState({
    tempNameClient: "",
    tempLadaClient: "",
    tempPhoneClient: "",
  });

  const { mutate: savePublicSchedule } = useMutation({
    mutationFn: (data: ScheduleServiceType) =>
      apiProvider.saveScheduleService(data),
    onSuccess: (data: ResponseApi) => handleSuccessPublicSchedule(data.data),
    onError: (err) => handleErrorPublicSchedule(),
  });

  const handleSuccessPublicSchedule = (data: ObjectResponse) => {
    if (data.error) return ErrorNotification();
    setShowSuccessNotification(true);
  };

  const handleErrorPublicSchedule = () => {
    ErrorNotification();
  };

  const { data: listLada } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.lada.getAll("lada")],
    queryFn: () => apiTypeService.getAllLada(),
    ...{
      select: (data: ResponseApi) => data.data.items as Array<LadaType>,
    },
  });

  const { data: dataPublicProvider } = useQuery({
    queryKey: [REACT_QUERY_KEYS.provider.getPublicInfoProvider(token)],
    queryFn: () => apiProvider.getInfoProvider(token),
    ...{
      select: (data: ResponseApi) => data.data,
    },
  });

  const publicInfoProvider: PublicInfoProviderType | null = useMemo(
    () =>
      !dataPublicProvider?.items
        ? null
        : (dataPublicProvider.items as PublicInfoProviderType),
    [dataPublicProvider]
  );

  const { data: listTimes, isLoading: isLoadingTimes } = useQuery({
    queryKey: [
      REACT_QUERY_KEYS.provider.getTimesProviderToSchedule(dateSelected.date),
    ],
    queryFn: () =>
      apiProvider.getTimesCalendarByProvider({
        ...dateSelected,
        idProvider: publicInfoProvider?.id,
      }),
    ...{
      select: (data: ResponseApi) => data.data.items as Array<TimeScheduleType>,
      enabled: Boolean(publicInfoProvider?.id),
    },
  });

  const { data: menuServices, isLoading: isLoadingMenuServices } = useQuery({
    queryKey: [
      REACT_QUERY_KEYS.provider.getMenuServicesByProvider(
        publicInfoProvider?.id as string
      ),
    ],
    queryFn: () => apiProvider.getServicesByProvider(publicInfoProvider?.id),
    ...{
      select: (data: ResponseApi) => data.data.items as Array<MenuServiceType>,
      enabled: Boolean(publicInfoProvider?.id),
    },
  });

  useEffect(() => {
    if (listTimes) {
      setBlockTime(listTimes);
    }
  }, [listTimes]);

  const disabledSubmit = useMemo(
    () =>
      Boolean(!dateSelected.date) ||
      Boolean(!selectedTime) ||
      Boolean(!selectedService) ||
      Boolean(!infoClient.tempLadaClient) ||
      Boolean(!infoClient.tempPhoneClient) ||
      Boolean(!infoClient.tempNameClient),
    [dateSelected.date, selectedTime, selectedService, infoClient]
  );

  const handleSelectDate = (data: any) => {
    setSelectedTime(null);
    setSelectedService(null);

    if (data === null) return setDateSelected({ day: "", date: "" });
    const day = dayjs(data.toString()).format("dddd");
    const date = convertDateToGeneralFormat(data, FORMAT_DATE.GENERAL_EN);

    setDateSelected({
      day,
      date: date ?? "",
    });
  };

  const handleSelectTime = (data: TimeScheduleType) => {
    setSelectedTime(data);
    setSelectedService(null);
  };

  const handleSelectService = (data: MenuServiceType) => {
    setSelectedService(data);
  };

  const handleSaveSchedule = () => {
    if (
      !REGEX.ONLY_NUMBER.test(infoClient.tempPhoneClient) &&
      infoClient.tempPhoneClient.length > 7
    )
      return setShowError(true);

    if (
      publicInfoProvider &&
      selectedTime &&
      selectedService &&
      dateSelected.date
    ) {
      savePublicSchedule({
        ...infoClient,
        idProviderAux: publicInfoProvider?.id,
        saveTempClient: false,
        scheduleDate: convertDateToGeneralFormat(
          dateSelected.date,
          FORMAT_DATE.TIME_STAMP
        ),
        startTime: selectedTime?.end,
        endTime: selectedTime?.end,
        nameService: selectedService?.nameService,
        people: selectedService?.people,
        amount: selectedService?.price,
        statusService: STATUS_SERVICE.PENDIENT,
      });
    }
  };
  return (
    <div>
      <div
        className="background-img-company"
        style={{
          backgroundImage: `url(${publicInfoProvider?.companyPictureUrl})`,
        }}
      >
        <div className="banner-calendar">
          <div className="wd-10">
            <div className="text-center">
              <h1 className="title-banner-simple">
                {dataPublicProvider && !dataPublicProvider?.error
                  ? "Agenda tu cita"
                  : "La url ha caducado"}
              </h1>
              {(!dataPublicProvider || dataPublicProvider?.error) && (
                <p className="warning-url">
                  Contacta nuevamente al profesionista para que te comparta una
                  nueva url para agendar tu cita
                </p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                className="btn-download-app"
                href="/app-para-buscar-profesionales-de-la-belleza"
              >
                Descarga app cliente
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex-calendar mb-4">
        {showSuccessNotification ? (
          <div className="success-notification">
            <div className="content-text-success-notification">
              <IoMdCheckmarkCircleOutline className="icon-success-notification" />
              <br />
              Se ha enviado la reservación de tu cita con éxito
            </div>
          </div>
        ) : (
          dataPublicProvider &&
          !dataPublicProvider?.error && (
            <div className="content-calendar col-4">
              <div>
                <p className="advertisement">Reservando con:</p>
                <h2 className="name-provider">
                  {publicInfoProvider?.companyName}
                </h2>
              </div>

              <div className="row-input mt-5">
                <div className="text-label">Fecha:</div>
                <DatePicker
                  onChange={handleSelectDate}
                  placeholder="Seleccione una fecha"
                  disabledDate={disablePastDates}
                />
              </div>
              <div>
                {isLoadingTimes ? (
                  <LoadingView />
                ) : (
                  <div>
                    {dateSelected.date !== "" && (
                      <>
                        <div className="row-input mt-5">
                          <div className="text-label">Horario:</div>
                          <div
                            className="content-value"
                            onClick={() => setSelectedTime(null)}
                          >
                            {selectedTime !== null && (
                              <>{convertHourToAMorPM(selectedTime?.start)}</>
                            )}
                          </div>
                        </div>
                        <div>
                          {selectedTime === null &&
                            (blockTime.length > 0 ? (
                              <div className="content-items-times">
                                {blockTime.map((item, index) => (
                                  <OptionTime
                                    key={index}
                                    item={item}
                                    handleSelect={handleSelectTime}
                                  />
                                ))}
                              </div>
                            ) : (
                              dateSelected.date !== "" && (
                                <EmptyView message="No hay disponibilidad en esta fecha" />
                              )
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div>
                {isLoadingMenuServices ? (
                  <LoadingView />
                ) : (
                  <>
                    {selectedTime !== null && (
                      <div>
                        <div className=" row-input mt-5">
                          <div className="text-label">Servicio:</div>
                          <div
                            className="content-value"
                            onClick={() => setSelectedService(null)}
                          >
                            {selectedService !== null && (
                              <>{selectedService.nameService}</>
                            )}
                          </div>
                        </div>
                        <div>
                          {selectedService === null &&
                            selectedTime !== null &&
                            menuServices?.map((item) => (
                              <OptionService
                                key={item.id}
                                item={item}
                                handleSelect={handleSelectService}
                              />
                            ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="row-input mt-5">
                <div className="text-label">Nombre:</div>
                <div>
                  <Input
                    className="content-value input-name"
                    placeholder="Ingrese su nombre"
                    maxLength={50}
                    showCount
                    onChange={(event) =>
                      setInfoClient((data) => ({
                        ...data,
                        tempNameClient: event.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="row-input mt-5">
                <div className="text-label">Teléfono:</div>
                <div>
                  <div className="content-end content-between-mob">
                    <div className="select-lada">
                      <Select
                        showSearch
                        placeholder={
                          <div className="c-action">Seleccione una lada</div>
                        }
                        optionFilterProp="label"
                        onChange={(event) =>
                          setInfoClient((data) => ({
                            ...data,
                            tempLadaClient: event,
                          }))
                        }
                        options={listLada?.map((item) => ({
                          value: item.lada,
                          label: `${item.code} ${item.lada}`,
                        }))}
                      />
                    </div>
                    <div className="phone-number">
                      <Input
                        className="content-value"
                        placeholder="Ingrese su numero"
                        maxLength={13}
                        showCount
                        onChange={(event) =>
                          setInfoClient((values) => ({
                            ...values,
                            tempPhoneClient: event.target.value,
                          }))
                        }
                        value={infoClient.tempPhoneClient}
                      />
                    </div>
                  </div>
                  {showError && (
                    <div className="text-error mt-1">
                      *El número telefónico solo debe contener numeros y tener
                      más de 7 dígitos
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 d-flex">
                <button
                  type="button"
                  className={`${
                    disabledSubmit
                      ? "btn-submit-calendar-disabled"
                      : "btn-submit-calendar"
                  }`}
                  disabled={disabledSubmit}
                  onClick={handleSaveSchedule}
                >
                  Enviar
                </button>
              </div>
            </div>
          )
        )}
        <div
          className={`${
            dataPublicProvider && !dataPublicProvider.error
              ? "col-4 content-center-xy"
              : "content-center content-center-mob mt-20"
          } mb-4`}
        >
          <div className="wd-8">
            <h1 className="subtitle">Descarga la aplicación cliente</h1>
            <p className="text-recommendation">
              Te recomendamos descargar la aplicación cliente para tener una
              mejor experiencia de usuario, con la aplicación cliente puedes
              darle seguimiento a tus citas que solicitas, encontrar más
              profesionales de diferentes tipos de servicios y más!!
            </p>
            <div className="mt-20 content-center">
              <ButtonKnowMore
                textBtn="Saber más"
                href="/app-para-buscar-profesionales-de-la-belleza"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDate;
