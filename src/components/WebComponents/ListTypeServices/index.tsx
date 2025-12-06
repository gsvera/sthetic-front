"use client";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { useQuery } from "@tanstack/react-query";
import { apiTypeService } from "@/api/catalog/";
import { ResponseApi } from "@/api/responseApi";
import { TypeServiceType } from "@/constans/GeneralType";
import { TypeServiceCard } from "@/components/WebComponents/TypeServiceCard";

export const ListTypeServices = () => {
  const { data: listTypeService = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.getTypeServices("types-services")],
    queryFn: () => apiTypeService.getAll(),
    ...{
      select: (data: ResponseApi) => data.data.items as TypeServiceType[],
    },
  });
  return (
    <>
      {listTypeService.length > 0
        ? listTypeService?.map((item: TypeServiceType) => (
            <TypeServiceCard
              key={item.id}
              id={item.id}
              icon={item.icon}
              typeServiceNameEs={item.typeServiceNameEs}
              descriptionEs={item.typeServiceNameEs}
            />
          ))
        : ""}
    </>
  );
};

export default ListTypeServices;
