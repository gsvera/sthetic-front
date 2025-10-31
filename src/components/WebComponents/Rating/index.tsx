import StarRating from "./StarRating";

type raitingProps = {
  numberRaiting: number;
};

export const Rating = ({ numberRaiting }: raitingProps) => {
  return (
    <div className="d-flex mb-1">
      <div className="number-rating">{numberRaiting.toFixed(1)}</div>
      <div className="content-center-xy">
        <StarRating rating={numberRaiting} />
      </div>
    </div>
  );
};

export default Rating;
