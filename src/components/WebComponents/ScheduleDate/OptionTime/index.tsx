import { TimeScheduleType } from "@/constans/GeneralType";
import { convertHourToAMorPM } from "@/utils/GeneralUtils";
import "./index.scss";

type optionTimeProps = {
  item: TimeScheduleType;
  handleSelect: (item: TimeScheduleType) => void;
};

export const OptionTime = ({ item, handleSelect }: optionTimeProps) => {
  return (
    <div className="option-time" onClick={() => handleSelect(item)}>
      <div className="option-time-row">
        <div className="d-flex-time">
          <div className="text-time">{convertHourToAMorPM(item.start)}</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default OptionTime;
