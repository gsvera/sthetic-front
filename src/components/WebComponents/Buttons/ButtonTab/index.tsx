import "./index.scss";

type buttonTabProps = {
  text: string;
  selected: boolean;
  handleClick: () => void;
};
export const ButtonTab = ({ text, selected, handleClick }: buttonTabProps) => {
  return (
    <button
      type="button"
      className={`${!selected ? "tab-unselect" : "tab-select"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonTab;
