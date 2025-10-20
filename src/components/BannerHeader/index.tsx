import React, { JSX } from "react";

type bannerHeaderProps = {
  slogan: string;
  child?: React.ReactNode;
};

export const BannerHeader = ({ slogan, child }: bannerHeaderProps) => {
  return (
    <div className="banner-home-div">
      <div className="content-text-banner">
        <h1 className="title-banner text-c-light">{slogan}</h1>
        {child}
      </div>
    </div>
  );
};

export default BannerHeader;
