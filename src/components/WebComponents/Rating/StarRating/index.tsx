import { useMemo } from "react";
import "./index.scss";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type starRatingProps = {
  maxStars?: number;
  rating: number;
  styleStar?: string;
};

export const StarRating = ({
  maxStars = 5,
  rating,
  styleStar,
}: starRatingProps) => {
  const localRating = useMemo(() => rating ?? 0, [rating]);
  return (
    <div className="d-flex">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const res = localRating - starValue;

        let icon = <BsStar className={`${styleStar ?? "star-icon"}`} />;
        if (localRating >= starValue) {
          icon = <BsStarFill className={`${styleStar ?? "star-icon"}`} />;
        } else if (localRating + 0.5 >= starValue) {
          icon = <BsStarHalf className={`${styleStar ?? "star-icon"}`} />;
        } else if (res > -1 && res < 0) {
          icon = <BsStarHalf className={`${styleStar ?? "star-icon"}`} />;
        }

        return (
          <div key={starValue} className="content-center-xy">
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
