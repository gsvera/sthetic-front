import { MdOutlineSearchOff } from "react-icons/md";
import "./index.scss";

type emptyViewProps = {
  message?: string;
};

export const EmptyView = ({
  message = "No se encontraron registros",
}: emptyViewProps) => {
  return (
    <div className="empty-view">
      <MdOutlineSearchOff className="icon-empty-view" />
      <p>{message}</p>
    </div>
  );
};

export default EmptyView;
