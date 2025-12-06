"use client";
import { apiTypeService } from "@/api/catalog";
import { apiProvider } from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import BannerHeader from "@/components/WebComponents/BannerHeader";
import CardProvider from "@/components/WebComponents/Provider/CardProvider";
import {
  InfoCompanyType,
  ResultPaginated,
  StateType,
  TypeServiceType,
} from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import { Select } from "antd";
import { useMemo, useState } from "react";
import { LoadingView } from "@/components/WebComponents/LoadingView";
import { FiArrowRight } from "react-icons/fi";
import ButtonPagination from "@/components/WebComponents/Buttons/ButtonPagination";
import ModalInfoProvider from "@/components/WebComponents/Provider/ModalInfoProvider";

export default function SearchWorkers() {
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [idProvider, setIdProvider] = useState("");
  const [pageParams, setPageParams] = useState({
    page: 0,
    size: 10,
    defaultState: "",
    typeService: "",
  });
  const { data: listTypeService = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.getTypeServices("types-services")],
    queryFn: () => apiTypeService.getAll(),
    ...{
      select: (data: ResponseApi) => data.data.items as TypeServiceType[],
    },
  });

  const { data: listStateGeo = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.getStates("states")],
    queryFn: () => apiTypeService.getAllState(),
    ...{
      select: (data: ResponseApi) => data.data.items as StateType[],
    },
  });

  const {
    data: dataProvider,
    refetch: refetchProviders,
    isLoading: isLoadingProviders,
  } = useQuery({
    queryKey: [REACT_QUERY_KEYS.provider.getProviders("providers")],
    queryFn: () => apiProvider.getProviders(pageParams),
    ...{
      select: (data: ResponseApi) => data.data.items as ResultPaginated,
      enabled: false,
    },
  });

  const listType = useMemo(() => {
    return listTypeService.map((item) => ({
      value: item.id,
      label: item.typeServiceNameEs,
    }));
  }, [listTypeService]);

  const listState = useMemo(() => {
    return listStateGeo.map((item) => ({
      value: item.stateName,
      label: item.stateName,
    }));
  }, [listStateGeo]);

  const lisProvider = useMemo(
    () =>
      dataProvider?.items !== undefined
        ? (dataProvider?.items as InfoCompanyType[])
        : [],
    [dataProvider]
  );

  const totalPages = useMemo(
    () => (!dataProvider?.totalPages ? 0 : dataProvider?.totalPages),
    [dataProvider]
  );

  const disableNextButton = useMemo(
    () => totalPages === 0 || totalPages === pageParams.page + 1,
    [totalPages, pageParams.page]
  );

  const searchProviders = () => {
    refetchProviders();
  };

  const handleSelectListType = (data: Array<number>) => {
    setPageParams((param) => ({
      ...param,
      typeService: data?.join(","),
    }));
  };

  const handleSelectState = (data: number) => {
    setPageParams((params) => ({
      ...params,
      defaultState: data ? data.toString() : "",
    }));
  };

  const goToStart = () => {
    const element = document.getElementById("content-search");
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 1000);
    }
  };

  const handleOnPressNextPage = () => {
    const sumPage = pageParams.page + 1;
    handleChangePaginate(sumPage);
    goToStart();
  };

  const handleChangePaginate = (page: number) => {
    setPageParams((params) => ({
      ...params,
      page: page,
    }));
    setTimeout(() => searchProviders(), 1000);
    goToStart();
  };

  const handleShowInfoProvider = (idProvider: string) => {
    setIdProvider(idProvider);
    setShowModalInfo(true);
  };

  const handleCloseModal = () => {
    setIdProvider("");
    setShowModalInfo(false);
  };

  return (
    <div>
      <BannerHeader
        slogan="Encuentra al profesionista de la estética y cuidado personal ideal para ti"
        bannerStyle="banner-search"
      />
      <div className="content-search content-center" id="content-search">
        <div>
          <div className="mb-3">
            <h2 className="title-search">
              Encuentra al especialista que estabas buscando
            </h2>
            <p className="line-height-m t-secondary text-size-m mt-1">
              Aqui puedes encontrar diferentes profesionales que te atenderán y
              darán un excelente servicio.
            </p>
          </div>
          <div>
            <Select
              showSearch
              placeholder={
                <div className="c-action">Seleccione un tipo de servicio</div>
              }
              optionFilterProp="label"
              onChange={handleSelectListType}
              mode="multiple"
              maxTagCount="responsive"
              options={listType}
              allowClear
            />
            <Select
              showSearch
              allowClear
              placeholder={<div className="c-action">Seleccione un Estado</div>}
              optionFilterProp="label"
              onChange={handleSelectState}
              options={listState}
            />
            <button
              type="button"
              className="btn-search"
              onClick={searchProviders}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="wd-7 m-horizontal-auto">
        {isLoadingProviders ? (
          <div className="content-loading">
            <LoadingView />
          </div>
        ) : (
          ""
        )}
        <div className="">
          {lisProvider?.length > 0
            ? lisProvider?.map((item) => (
                <CardProvider
                  key={item.id}
                  item={item}
                  handleShowInfo={handleShowInfoProvider}
                />
              ))
            : ""}
        </div>
        <div className="content-pagination">
          <div className="wd-7 content-center m-horizontal-mob-auto">
            <button
              type="button"
              className={`${
                disableNextButton ? "btn-next-page-disabled" : "btn-next-page"
              } wd-mob-10`}
              disabled={disableNextButton}
              onClick={handleOnPressNextPage}
            >
              Siguiente pagina <FiArrowRight className="ml-1" size={20} />
            </button>
          </div>
          <div className="wd-2 wd-mob-9 mt-mob-2 content-center-xy m-horizontal-mob-auto">
            <ButtonPagination
              page={pageParams.page}
              totalPages={totalPages}
              handleNextPage={handleChangePaginate}
              handlePrevPage={handleChangePaginate}
            />
          </div>
        </div>
      </div>
      {showModalInfo && (
        <ModalInfoProvider
          open={showModalInfo}
          idProvider={idProvider}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
