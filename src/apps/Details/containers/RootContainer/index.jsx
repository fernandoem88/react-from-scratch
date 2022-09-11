import React from "react";
import { useNavigate } from "react-router-dom";
import { BEM } from "@src/shared/constants";
import { MessageWrapper } from "@src/shared/components";

import { $DetailsApp } from "../..";
import "./style.scss";

const bem = BEM("details-page");

const RootContainer = () => {
  const status = $DetailsApp.useSlice("status");
  const asset = $DetailsApp.useSlice("asset");
  const recommendedAssets = $DetailsApp.useSlice("recommendedAssets");
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate("/");
  };

  if (status.isLoading)
    return (
      <main className={bem()}>
        <MessageWrapper>Please wait...</MessageWrapper>
      </main>
    );

  if (status.error)
    return (
      <main className={bem()}>
        <MessageWrapper>
          something went wrong: {status.error.message}
        </MessageWrapper>
      </main>
    );

  if (!asset)
    return (
      <main className={bem()}>
        <MessageWrapper>no data</MessageWrapper>
      </main>
    );

  return (
    <main
      className={bem()}
      style={{
        "--details-page-image-cover-url": `url(${asset.primaryImage.url}), linear-gradient(to bottom, ${asset.primaryImage.accentColor}, black)`,
        "--details-page-color-0": asset.primaryImage.accentColor,
        "--details-page-color-1": asset.primaryImage.darkAccentColor,
      }}
    >
      <section className={bem("image-cover")}>
        <div className={bem("image-cover-bg")} title="image title">
          "image title"
        </div>
      </section>
      <section className={bem("details")}>
        <article className={bem("description")}>
          <h1 className={bem("description-title")}>{asset.title}</h1>
          <p className={bem("description-message")}>{asset.description}</p>
        </article>
        <div className={bem("recommended-assets")}>
          {recommendedAssets.map((ast, i) => (
            <div className={bem("recommended-asset-item")} key={i}>
              sub asset {i}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default React.memo(RootContainer);
