import { TypeServiceType } from "@/constans/GeneralType";
import AnimatedIcon from "../Image/AnimatedIcon";
import { useMemo } from "react";

export const TypeServiceCard = ({
  icon,
  typeServiceNameEs,
}: TypeServiceType) => {
  const img: string = useMemo(
    () =>
      icon !== undefined && icon !== null ? icon : "/meredith-text-logo.png",
    [icon]
  );
  return (
    <div className="type-service-card content-center-xy">
      <div>
        <div className="text-center">
          <AnimatedIcon
            src={img}
            alt={typeServiceNameEs}
            styles={`${
              icon !== null
                ? "type-service-card-icon"
                : "type-service-card-icon-mea"
            }`}
          />
        </div>
        <h3 className="title-type-service-card">{typeServiceNameEs}</h3>
      </div>
    </div>
  );
};
