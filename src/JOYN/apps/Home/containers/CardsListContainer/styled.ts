import styled from "styled-components";

export const Root = styled.div.attrs({
  "data-tbsc-name": "LaneContainer--Root" as const,
})<{}>`
  position: relative;
  margin: auto;
  margin-top: 2.4rem;
  width: 100%;
  border-radius: 0.6rem;
`;
Root.displayName = "LaneContainerRoot";
