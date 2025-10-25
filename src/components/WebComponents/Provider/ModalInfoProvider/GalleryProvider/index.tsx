import apiTypeService from "@/api/catalog";
import { REACT_QUERY_KEYS } from "@/api/react-query-keys";
import { ResponseApi } from "@/api/responseApi";
import LoadingView from "@/components/WebComponents/LoadingView";
import {
  DetailProjectType,
  ModalCustomProps,
  ProjectType,
} from "@/constans/GeneralType";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";

type galleryProviderProps = ModalCustomProps & {
  project: ProjectType;
};

export const GalleryProvider = ({
  open,
  handleClose,
  project,
}: galleryProviderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [imgs, setImgs] = useState<Array<DetailProjectType>>();

  const { data: listImg = [], isLoading: isLoadingListImg } = useQuery({
    queryKey: [REACT_QUERY_KEYS.catalog.services.getProjectById(project.id)],
    queryFn: () =>
      apiTypeService.getCatalogServiceDetailByIdPorject(project.id),
    ...{
      select: (data: ResponseApi) =>
        data.data.items as Array<DetailProjectType>,
      enabled: !!project.id,
    },
  });

  useEffect(() => {
    if (listImg.length > 0) {
      setImgs(listImg);
    }
  }, [listImg]);
  const nextImage = () => {
    if (imgs) {
      setSlideDirection("next");
      setCurrentIndex((prev) => (prev + 1) % imgs?.length);
    }
  };

  const prevImage = () => {
    if (imgs) {
      setSlideDirection("prev");
      setCurrentIndex((prev) => (prev - 1 + imgs?.length) % imgs?.length);
    }
  };
  return (
    <Modal
      open={open}
      onCancel={handleClose}
      closable
      footer={null}
      className="gallery-provider"
    >
      {isLoadingListImg ? (
        <LoadingView />
      ) : (
        <div>
          <button className="arrow left" onClick={prevImage}>
            ‹
          </button>
          <button className="arrow right" onClick={nextImage}>
            ›
          </button>
          <div className={`image-container ${slideDirection}`}>
            <div
              className="image-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {imgs?.map((img, i) => (
                <img key={i} src={img.fileUrl} alt={`img-${i}`} />
              ))}
            </div>
          </div>
          <div className="indicator">
            {currentIndex + 1} / {imgs?.length}
          </div>
        </div>
      )}
    </Modal>
  );
};
