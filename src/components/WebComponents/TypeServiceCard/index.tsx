import { TypeServiceType } from "@/constans/Constants";
import AnimatedIcon from "../Image/AnimatedIcon";

export const TypeServiceCard = ({
  icon,
  typeServiceNameEs,
  descriptionEs,
}: TypeServiceType) => {
  return (
    <div className="type-service-card content-center-xy">
      <div>
        <div className="text-center">
          <AnimatedIcon
            src={icon !== null ? icon : "/meredith-text-logo.png"}
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
