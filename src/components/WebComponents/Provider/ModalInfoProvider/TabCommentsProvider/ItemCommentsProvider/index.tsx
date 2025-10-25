import StarRating from "@/components/WebComponents/Rating/StarRating";
import { QualificationType } from "@/constans/GeneralType";
import { convertDateToGeneralFormat } from "@/utils/GeneralUtils";
import "./index.scss";

type itemCommentsProvider = {
  item: QualificationType;
};

export const ItemCommentsProvider = ({ item }: itemCommentsProvider) => {
  return (
    <div className="item-comments">
      <div className="content-space-between">
        <p>{convertDateToGeneralFormat(item.createdAt)}</p>
        <StarRating rating={item.rating} sizeStar={15} />
      </div>
      <p className="name-client-item-comments">
        {item.nameClient.replaceAll("null", "")}
      </p>
      <p className="comment-item-comments">{item.comment}</p>
    </div>
  );
};

export default ItemCommentsProvider;
