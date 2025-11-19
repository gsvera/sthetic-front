import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedIcon from "../Image/AnimatedIcon";

type cardTypeServicesProps = {
  classNameComponent: string;
  srcImageIcon: string;
  altImageIcon: string;
  titleCard: string;
  descriptionCard: string;
  href: string;
};

export const CardTypeServices = ({
  classNameComponent,
  srcImageIcon,
  altImageIcon,
  titleCard,
  descriptionCard,
  href,
}: cardTypeServicesProps) => {
  return (
    <div className={classNameComponent}>
      <div>
        <div className="d-flex">
          <AnimatedIcon
            src={srcImageIcon}
            alt={altImageIcon}
            styles="img-card-services"
          />
        </div>
        <h3 className="title-card-services">{titleCard}</h3>
        <div className="content-text-card-services">
          <p className="description-card-services">{descriptionCard}</p>
          {/* <div className="content-view-more">
            <a href={href} className="view-more">
              Ver más
              <FaArrowRightLong style={{ marginLeft: "5px" }} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardTypeServices;
