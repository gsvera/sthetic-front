import apiProvider from "@/api/provider";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import EmptyView from "@/components/WebComponents/EmptyView";
import LoadingView from "@/components/WebComponents/LoadingView";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import "./index.scss";
import Rating from "@/components/WebComponents/Rating";
import { CommentsType, QualificationType } from "@/constans/GeneralType";
import ItemCommentsProvider from "./ItemCommentsProvider";

type tabCommentsProviderProps = {
  idProvider: string;
};

export const TabCommentsProvider = ({
  idProvider,
}: tabCommentsProviderProps) => {
  const [qualification, setQualification] = useState<CommentsType>({
    rating: 0,
    listComments: [],
  });
  const { data: listQualifications = [], isLoading: isLoadingQualifications } =
    useQuery({
      queryKey: [REACT_QUERY_KEYS.provider.getRatingsByProvider(idProvider)],
      queryFn: () => apiProvider.getRatingsByProvider(idProvider),
      ...{
        select: (data: ResponseApi) =>
          data.data.items as Array<QualificationType>,
        enabled: Boolean(idProvider),
      },
    });

  useEffect(() => {
    if (listQualifications && listQualifications?.length > 0) {
      let rating = 0;
      for (let i = 0; i < listQualifications?.length; i++) {
        rating = rating + listQualifications[i]?.rating;
      }
      setQualification({
        rating: rating / listQualifications.length,
        listComments: listQualifications.map((item) => item),
      });
    }
  }, [listQualifications]);

  return (
    <>
      {isLoadingQualifications ? (
        <LoadingView />
      ) : (
        <>
          {qualification.listComments.length === 0 ? (
            <div style={{ marginTop: 100 }}>
              <EmptyView message="No ha recibido calificaciones por el momento" />
            </div>
          ) : (
            <div className="tab-comments">
              <p className="label mt-2 mb-1">Opiniones del servicio</p>
              <div
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Rating numberRaiting={qualification.rating} iconSize={20} />
              </div>
              <p className="qualifications">
                {qualification.listComments?.length} calificaciones
              </p>
              <div className="mt-2">
                <div className="content-comments">
                  {qualification.listComments.map(
                    (item: QualificationType) =>
                      !!item.comment && (
                        <ItemCommentsProvider key={item.id} item={item} />
                      )
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TabCommentsProvider;
