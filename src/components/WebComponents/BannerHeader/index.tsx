import React from "react";
import "./index.scss";

type bannerHeaderProps = {
  slogan: string;
  bannerStyle?: string;
  child?: React.ReactNode;
};

export const BannerHeader = ({
  slogan,
  bannerStyle,
  child,
}: bannerHeaderProps) => {
  return (
    <div className={bannerStyle}>
      <div className={`banner-home-div`}>
        <div className="content-text-banner">
          <h1 className="title-banner text-c-light">{slogan}</h1>
          {child}
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
