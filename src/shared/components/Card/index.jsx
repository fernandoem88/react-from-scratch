 import React from "react";
import notFound from "@src/shared/img/not-found.png";
import "./style.scss";

const Card = ({ asset, onClick, hidden = false }) => {
  return (
    <div
      className={"card" + (hidden ? " card--hidden" : "")}
      style={{
        "--card-bg-url": `url(${asset.primaryImage.url}), url(${notFound})`,
        "--card-color-0": asset.primaryImage.accentColor,
        "--card-color-1": asset.primaryImage.darkAccentColor,
      }}
      onClick={onClick}
    >
      <div className="card__aspect-ratio">
        <div className="card__content">
          <div className="card__title-wrapper">
            <span>{asset.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Card);
