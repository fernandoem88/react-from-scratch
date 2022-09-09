import styled from "styled-components";
import { commonMedia } from "../../../../shared/constants";

export const Root = styled.div.attrs({
  "data-tbsc-name": "CardsListContainer--Root" as const,
})<{}>`
  margin: auto;
  width: 100%;
  ${commonMedia}
`;
Root.displayName = "CardsListContainerRoot";
