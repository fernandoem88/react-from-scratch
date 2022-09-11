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
          <div>
            something went wrong: {status.error.message}:{" "}
            <button onClick={handleGoTo}> {"<"} back</button>
          </div>
        </MessageWrapper>
      </main>
    );

  if (!asset)
    return (
      <main className={bem()}>
        <MessageWrapper>
          <div>
            no data: <button onClick={handleGoTo}> {"<"} back</button>
          </div>
        </MessageWrapper>
      </main>
    );

  return (
    <main
      className={bem()}
      style={{
        "--details-page-image-cover-url": `url(${asset.primaryImage.url}), linear-gradient(to bottom, transparent, ${asset.primaryImage.accentColor})`,
        "--details-page-image-cover-backup": `linear-gradient(to bottom, ${asset.primaryImage.accentColor}, black)`,

        "--details-page-color-0": asset.primaryImage.accentColor,
        "--details-page-color-1": asset.primaryImage.darkAccentColor,
      }}
    >
      <section className={bem("image-cover")}>
        <div className={bem("image-cover-bg")}>
          <p>Oops, image not found!</p>
        </div>
      </section>
      <section className={bem("details")}>
        <article className={bem("description")}>
          <h2 className={bem("description-title")}>{asset.title}</h2>
          <p className={bem("description-message")}>{asset.description}</p>
          <button className={bem("btn-home")} onClick={handleGoTo}>
            {"< "} Home
          </button>
        </article>
      </section>
    </main>
  );
};
export default React.memo(RootContainer);
