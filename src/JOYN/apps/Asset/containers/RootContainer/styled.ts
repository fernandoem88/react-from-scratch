import styled from "styled-components";
import { commonMedia, mediaScreen } from "../../../../shared/constants";

export const Root = styled.div.attrs({
  "data-tbsc-name": "RootContainer--Root" as const,
})<{}>`
  ${commonMedia}
  margin: auto;
  margin-top: 3.2rem;
`;
Root.displayName = "RootContainerRoot";

const whRatio = "40%";

export const GoTo = styled.div.attrs({
  "data-tbsc-name": "RootContainer--GoTo" as const,
})<{}>`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  padding: 1.2rem;
  color: #222;
  background: #ffffff77;
  opacity: 0.3;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1.2rem #0004;
  }
`;

GoTo.displayName = "RootContainerGoTo";

export const ImageCover = styled.div.attrs({
  "data-tbsc-name": "RootContainer--ImageCover" as const,
})<{ $bgUrl: string }>`
  width: 100%;
  position: relative;
  padding-top: ${whRatio};
  background: url(${(p) => p.$bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 30%;
  &:hover ${GoTo} {
    opacity: 1;
  }
`;
ImageCover.displayName = "RootContainerImageCover";

export const CoverContent = styled.div.attrs({
  "data-tbsc-name": "RootContainer--CoverContent" as const,
})<{ $colors: [string, string] }>`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  bottom: 0;
  width: 100%;
  height: 75%;
  padding: 1.2rem;
  ${mediaScreen.lgUp`
    height: 70%;
  `}
  ${mediaScreen.lgUp`
    height: 60%;
    padding: 2.4rem 1.2rem;
  `}

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background: linear-gradient(
      to bottom,
      transparent,
      ${(p) => p.$colors[0]},
      ${(p) => p.$colors[1]}
    );
  }
`;
CoverContent.displayName = "RootContainerCoverContent";

export const CoverTitle = styled.div.attrs({
  "data-tbsc-name": "RootContainer--CoverTitle" as const,
})<{}>`
  color: white;
  font-weight: bold;
  letter-spacing: 0.2rem;
  font-size: 1.8rem;
  ${mediaScreen.mdUp`
    font-size: 2.4rem;
  `}
  ${mediaScreen.lgUp`
    font-size: 3.2rem;
  `}
`;
CoverTitle.displayName = "RootContainerCoverTitle";

export const CoverDescr = styled.div.attrs({
  "data-tbsc-name": "RootContainer--CoverDescr" as const,
})<{}>`
  color: white;
  margin-top: 1.2rem;
  z-index: 2;
  max-width: 60%;
  padding-right: 0.6rem;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
`;
CoverDescr.displayName = "RootContainerCoverDescr";
