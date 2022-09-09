import styled from "styled-components";

export const MessageWrapper = styled.div.attrs({
  "data-tbsc-name": "RootContainer--MessageWrapper" as const,
})<{}>`
  & * {
    color: white;
  }
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2.4rem;
`;
MessageWrapper.displayName = "RootContainerLoading";
