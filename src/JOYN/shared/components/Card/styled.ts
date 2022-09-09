import styled, { css } from "styled-components";
import { mediaScreen } from "../../constants";

const whRatio = (250 * 100) / 165;

export const Root = styled.div.attrs({
  "data-tbsc-name": "Card--Root" as const,
})<{ $bgUrl: string; $hidden?: boolean }>`
  position: relative;
  width: 100%;
  margin: auto;

  background: url(${(p) => p.$bgUrl});
  background-size: cover;
  background-position: 0;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.15s;
  border: solid 1px transparent;

  &:hover {
    transform: scale(1.05);
    background-size: 100%;
  }

  ${(p) =>
    p.$hidden &&
    css`
      filter: blur(1px);
    `}
`;
Root.displayName = "CardRoot";

export const AspectRatio = styled.div.attrs({
  "data-tbsc-name": "Card--AspectRatio" as const,
})<{}>`
  position: relative;
  padding-top: ${whRatio}%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;
AspectRatio.displayName = "CardAspectRatio";

export const TitleWrapper = styled.div.attrs({
  "data-tbsc-name": "Card--TitleWrapper" as const,
})<{ $colors: [accent: string, dark: string] }>`
  position: relative;
  height: 40%;
  transition: 0.2s;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  & > * {
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    white-space: pre-wrap;
  }
  &:before {
    position: absolute;
    content: " ";

    top: 0.2rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: linear-gradient(
      to bottom,
      transparent,
      ${(p) => p.$colors[0]} 10%,
      ${(p) => p.$colors[1]} 50%
    );
  }
  ${mediaScreen.mdUp`
     & > * {
      font-size: 1.2rem;
     }
  `}
`;
TitleWrapper.displayName = "CardTitleWrapper";

export const Content = styled.div.attrs({
  "data-tbsc-name": "Card--Content" as const,
})<{}>`
  width: 100%;
  left: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: stretch;

  margin-top: -${whRatio}%;
  &:hover ${TitleWrapper} > * {
    color: white;
    font-weight: bold;
  }
`;
Content.displayName = "CardContent";
