import { InfoCompanyType } from "@/constans/GeneralType";
import "./index.scss";
import BadgeProvider from "../BadgeProvider";
import { useMemo, useState } from "react";
import { Typography } from "antd";
import Rating from "../../Rating";

type cardProviderProps = {
  item: InfoCompanyType;
  handleShowInfo: (idProvider: string) => void;
};

export const CardProvider = ({ item, handleShowInfo }: cardProviderProps) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const badgeList = useMemo(
    () => item?.typesServices?.split(","),
    [item.typesServices]
  );

  return (
    <div className="content-center">
      <div className="card-provider">
        <div className="content-card-provider-img">
          <div
            className="card-provider-img"
            style={{ backgroundImage: `url(${item.companyPictureUrl})` }}
          ></div>
        </div>
        <div className="content-text-card-provider content-center-xy">
          <div>
            <h4 className="title-card-provider mb-1">{item.companyName}</h4>
            {item.auxRating > 0 && <Rating numberRaiting={item.auxRating} />}
            <div className="content-badge-card-provider mb-1">
              {badgeList.map((item, index) => (
                <BadgeProvider key={index} label={item} />
              ))}
            </div>
            <div className="content-description-card-provider">
              <Typography.Paragraph ellipsis={{ rows: showMoreText ? 999 : 2 }}>
                {item.generalDescription}
              </Typography.Paragraph>
            </div>
            <div>
              <span
                className="read-more"
                onClick={() => setShowMoreText((v) => !v)}
              >
                Leer {showMoreText ? "menos" : "más"}
              </span>
            </div>
            <div className="content-center">
              <button
                type="button"
                className="btn-card-provider"
                onClick={() => handleShowInfo(item.idUser)}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProvider;
