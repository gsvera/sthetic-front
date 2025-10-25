import apiProvider from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import {
  ProjectType,
  ProviderType,
  TAB_PROVIDER_SELECTED,
} from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import "./index.scss";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
  BsWhatsapp,
} from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import { useMemo, useState } from "react";
import ButtonTab from "../../Buttons/ButtonTab";
import apiTypeService from "@/api/catalog";
import TabInfoProvider from "./TabInfoProvider";
import TabAddressProvider from "./TabAddressProvider";
import { GalleryProvider } from "./GalleryProvider";
import TabCommentsProvider from "./TabCommentsProvider";

type modalInfoProviderProps = {
  open: boolean;
  idProvider: string;
  handleCloseModal: () => void;
};

export const ModalInfoProvider = ({
  open,
  idProvider,
  handleCloseModal,
}: modalInfoProviderProps) => {
  const message =
    "Hola! Te encontre en la app de Meredith Aesthetic, me gustaria más informacion acerca de tus servicios";
  const [openGallery, setOpenGallery] = useState(false);
  const [tabSelected, setTabSelected] = useState<TAB_PROVIDER_SELECTED>(
    TAB_PROVIDER_SELECTED.INFO
  );
  const [projectSelected, setProjectSelected] = useState<ProjectType>();
  const { data: dataInfoProvider } = useQuery({
    queryKey: [REACT_QUERY_KEYS.provider.getInfoProvider(idProvider)],
    queryFn: () => apiProvider.getProviderById(idProvider),
    ...{
      select: (data: ResponseApi) => data.data.items as ProviderType,
      enabled: Boolean(idProvider),
    },
  });
  const { data: dataListProyects = [], isLoading: isLoadingLisProyects } =
    useQuery({
      queryKey: [REACT_QUERY_KEYS.catalog.services.getByUserId(idProvider)],
      queryFn: () => apiTypeService.getCatalogServicesByUserId(idProvider),
      ...{
        select: (data: ResponseApi) => data.data.items as Array<ProjectType>,
        enabled: Boolean(idProvider),
      },
    });
  const phoneWA = useMemo(
    () =>
      `${dataInfoProvider?.lada.replace("+", "")}${dataInfoProvider?.phone}`,
    [dataInfoProvider]
  );
  const openModalShowGallery = (item: ProjectType) => {
    setProjectSelected(item);
    setOpenGallery(true);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCloseModal}
      footer={null}
      className="modal-info-provider"
    >
      <div
        className="banner-provider"
        style={{
          backgroundImage: `url(${dataInfoProvider?.infoCompanyDTO.companyPictureUrl})`,
        }}
      >
        <div className="content-center-xy">
          <div className="content-name-info-provider">
            {dataInfoProvider?.firstName} {dataInfoProvider?.lastName}
          </div>
          <div
            className="profile-picture-info-provider"
            style={{
              backgroundImage: `url(${
                dataInfoProvider?.profilePicture ?? "/me-logo.png"
              })`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex-end mt-2">
        <div>
          {dataInfoProvider?.infoCompanyDTO.facebook && (
            <Link
              href={dataInfoProvider?.infoCompanyDTO.facebook}
              target="_blank"
            >
              <BsFacebook className="icon-info-provider" />
            </Link>
          )}
          {dataInfoProvider?.infoCompanyDTO.instagram && (
            <Link
              href={dataInfoProvider?.infoCompanyDTO.instagram}
              target="_blank"
            >
              <BsInstagram className="icon-info-provider" />
            </Link>
          )}
          {dataInfoProvider?.phone && (
            <Link href={`tel:+${dataInfoProvider?.phone}`} target="_blank">
              <BsFillTelephoneOutboundFill className="icon-info-provider" />
            </Link>
          )}
          {dataInfoProvider?.phone && dataInfoProvider.lada && (
            <Link
              href={`https://wa.me/${phoneWA}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
            >
              <BsWhatsapp className="icon-info-provider" />
            </Link>
          )}
          {dataInfoProvider?.infoCompanyDTO.webPage && (
            <Link
              href={dataInfoProvider?.infoCompanyDTO.webPage}
              target="_blank"
            >
              <TbWorldWww className="icon-info-provider" />
            </Link>
          )}
        </div>
      </div>
      <div className="content-space-between mt-1">
        <ButtonTab
          text="Información"
          selected={tabSelected === TAB_PROVIDER_SELECTED.INFO ? true : false}
          handleClick={() => setTabSelected(TAB_PROVIDER_SELECTED.INFO)}
        />
        <ButtonTab
          text="Dirección"
          selected={
            tabSelected === TAB_PROVIDER_SELECTED.ADDRESS ? true : false
          }
          handleClick={() => setTabSelected(TAB_PROVIDER_SELECTED.ADDRESS)}
        />
        <ButtonTab
          text="Comentarios"
          selected={
            tabSelected === TAB_PROVIDER_SELECTED.COMMENTS ? true : false
          }
          handleClick={() => setTabSelected(TAB_PROVIDER_SELECTED.COMMENTS)}
        />
      </div>
      <div>
        {dataInfoProvider &&
          idProvider &&
          tabSelected === TAB_PROVIDER_SELECTED.INFO && (
            <TabInfoProvider
              infoProvider={dataInfoProvider}
              listProjects={dataListProyects}
              isLoading={isLoadingLisProyects}
              handleShowGallery={openModalShowGallery}
            />
          )}
        {idProvider && tabSelected === TAB_PROVIDER_SELECTED.ADDRESS && (
          <TabAddressProvider idProvider={idProvider} />
        )}
        {idProvider && tabSelected === TAB_PROVIDER_SELECTED.COMMENTS && (
          <TabCommentsProvider idProvider={idProvider} />
        )}
        {openGallery && projectSelected && (
          <GalleryProvider
            open={openGallery}
            handleClose={() => setOpenGallery(false)}
            project={projectSelected}
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalInfoProvider;
