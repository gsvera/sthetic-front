import { ProjectType } from "@/constans/GeneralType";
import { convertCurrency } from "@/utils/GeneralUtils";
import "./index.scss";

type previeCardProps = {
  element: ProjectType;
  handleShowGallery: (element: ProjectType) => void;
};

export const PreviewCardProvider = ({
  element,
  handleShowGallery,
}: previeCardProps) => {
  const handleShowMore = () => {
    handleShowGallery(element);
  };

  return (
    <div className="preview-card-provider">
      <div className="content-preview-card-image">
        <div
          className="preview-card-image"
          style={{
            backgroundImage: `url(${element?.catalogUserServiceDetailDTO?.fileUrl})`,
          }}
        ></div>
      </div>
      <h2 className="title-preview-card">{element.nameService}</h2>
      <div className="row-attributes">
        <div>
          <p className="label">Archivos:</p>
          <p className="value">{element.totalElement}</p>
        </div>
        <div>
          <p className="label">Rango de precios:</p>
          <p className="value">
            {element.minPrice && convertCurrency(element.minPrice)} -{" "}
            {element.maxPrice && convertCurrency(element.maxPrice)}
          </p>
        </div>
      </div>
      <div className="content-center">
        <button
          className="btn-show-more"
          type="button"
          onClick={handleShowMore}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default PreviewCardProvider;
