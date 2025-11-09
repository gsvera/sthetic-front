import { MenuServiceType } from "@/constans/GeneralType";
import { convertCurrency } from "@/utils/GeneralUtils";
import "./index.scss";

type optionServiceProps = {
  item: MenuServiceType;
  handleSelect: (item: MenuServiceType) => void;
};

export const OptionService = ({ item, handleSelect }: optionServiceProps) => {
  return (
    <div className="option-service-card" onClick={() => handleSelect(item)}>
      <div className="option-service">
        <div className="name-service">{item.nameService}</div>
        <div className="row-option-service">
          <div className="price-option-service">
            {convertCurrency(item.price)}
          </div>
          <div className="number-people">
            {item.people > 1 ? `Para ${item.people} personas` : "Por persona"}
          </div>
        </div>
      </div>
    </div>
  );
};
