import { ProjectType, ProviderType } from "@/constans/GeneralType";
import BadgeProvider from "../../BadgeProvider";
import { useMemo } from "react";
import "./index.scss";
import PreviewCardProvider from "../PreviewCardProvider";
import LoadingView from "@/components/WebComponents/LoadingView";

type tabInfoProviderProps = {
  infoProvider: ProviderType;
  listProjects: Array<ProjectType>;
  isLoading: boolean;
  handleShowGallery: (item: ProjectType) => void;
};

export const TabInfoProvider = ({
  infoProvider,
  listProjects,
  isLoading,
  handleShowGallery,
}: tabInfoProviderProps) => {
  const badgeList = useMemo(
    () => infoProvider?.typeServices?.split(","),
    [infoProvider.typeServices]
  );
  const onShowGallery = (item: ProjectType) => {
    handleShowGallery(item);
  };
  return (
    <div className="tab-info-provider">
      <h2 className="title-info-provider">
        {infoProvider.infoCompanyDTO.companyName}
      </h2>
      <div>{infoProvider.infoCompanyDTO.generalDescription}</div>
      <div className="mb-3">
        <div className="label">Categorias:</div>
        <div className="contet-badge">
          {badgeList?.map((item, index) => (
            <BadgeProvider key={index} label={item} />
          ))}
        </div>
      </div>
      <div className="mb-3">
        {isLoading ? (
          <LoadingView />
        ) : (
          listProjects.map((item) => (
            <PreviewCardProvider
              key={item.id}
              element={item}
              handleShowGallery={onShowGallery}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TabInfoProvider;
