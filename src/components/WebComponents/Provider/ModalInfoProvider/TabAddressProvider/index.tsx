import apiProvider from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import { LocationType } from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import "./index.scss";
import LoadingView from "@/components/WebComponents/LoadingView";

type tabAddressProviderProps = {
  idProvider: string;
};
export const TabAddressProvider = ({ idProvider }: tabAddressProviderProps) => {
  const { data: dataLocation, isLoading: isLoadingLocation } = useQuery({
    queryKey: [REACT_QUERY_KEYS.provider.getLocationProvider(idProvider)],
    queryFn: () => apiProvider.getLocationByProvider(idProvider),
    ...{
      select: (data: ResponseApi) => data.data.items as LocationType,
      enabled: Boolean(idProvider),
    },
  });
  const textAddres = (text: string | undefined | null) => {
    if (text) return `${text},`;
  };
  return (
    <div className="tab-addres-provider">
      <div>
        <p className="label mt-2 mb-1">Ubicado en: </p>
        <p className="text-direction">
          {textAddres(dataLocation?.auxState)}{" "}
          {textAddres(dataLocation?.auxMunicipality)}
          {textAddres(dataLocation?.reference)}
        </p>
      </div>
      <div className="content-map-addres-provider">
        {isLoadingLocation ? (
          <LoadingView />
        ) : (
          <iframe
            className="map-address-provider"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${dataLocation?.latitude},${dataLocation?.longitude}&hl=es&z=15&output=embed`}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default TabAddressProvider;
