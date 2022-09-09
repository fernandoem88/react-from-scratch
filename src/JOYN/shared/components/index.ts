import styled from "styled-components";

export const CardMessage = styled.div.attrs({
  "data-tbsc-name": "SharedComponents--CardMessage",
})<{}>`
  padding: 1.2rem 0;
  color: #ddd;
`;
CardMessage.displayName = "SharedComponentsCardMessage";

export const ErrorWrapper = styled(CardMessage).attrs({
  "data-tbsc-name": "SharedComponents--ErrorWrapper",
})<{}>`
  border: solid 1px red;
`;
ErrorWrapper.displayName = "SharedComponentsErrorWrapper";
