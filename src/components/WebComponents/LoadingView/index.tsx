import { Spin } from "antd";
import "./index.scss";

export const LoadingView = () => {
  return (
    <div className="loading-view">
      <Spin size="large" />
    </div>
  );
};

export default LoadingView;
