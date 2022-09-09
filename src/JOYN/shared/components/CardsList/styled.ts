import styled from "styled-components";
import { mediaScreen } from "../../constants";

export const Root = styled.div.attrs({
  "data-tbsc-name": "Cards--Root" as const,
})<{}>`
  position: relative;
  padding: 2.4rem 1.2rem;
  margin: auto;

  width: 100%;
  /* border-radius: 0.6rem; */

  background: #2d2d2dd4;
`;
Root.displayName = "CardsRoot";

export const Title = styled.div.attrs({
  "data-tbsc-name": "Cards--Title" as const,
})<{}>`
  color: white;
  font-size: 2.4rem;
  margin-bottom: 0.6rem;
  text-align: center;
  ${mediaScreen.mdUp`
    text-align: left;
  `}
`;
Title.displayName = "CardsTitle";
