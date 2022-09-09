import React, { useCallback, useMemo } from "react";

import CardsList from "@src/shared/components/CardsList";
import { CardMessage, ErrorWrapper } from "@src/shared/components";
import { $lanes } from "@src/shared/queries";

import CardContainer from "../CardContainer";
import * as sc from "./styled";

interface Props {
  id: string;
  maxCards: number;
}

const defaultStyle = { margin: 25 };
const LaneContainer: React.FC<Props> = (props) => {
  const [lane, isLoading, error] = $lanes.useSelector((s) =>
    s.getLaneById(props.id)
  );

  const renderCard = useCallback(
    (cardId: string, hidden?: boolean) => (
      <CardContainer id={cardId} hidden={hidden} />
    ),
    []
  );
  const centered = props.maxCards === 1;
  const style = useMemo(() => ({ ...defaultStyle, centered }), [centered]);

  if (isLoading) return <CardMessage>loading...</CardMessage>;

  if (error)
    return (
      <ErrorWrapper>
        {"Something went wrong: " + (error as any).message}
      </ErrorWrapper>
    );
  if (!lane) return <CardMessage>no data</CardMessage>;

  const fallbackMessage =
    "There is no items right now, please try again later!";

  return (
    <sc.Root>
      <CardsList
        cardIds={lane.assetsIds}
        title={lane.headline}
        renderCard={renderCard}
        maxCards={props.maxCards}
        fallbackMessage={fallbackMessage}
        style={style}
        // currentIndex={2}
      />
    </sc.Root>
  );
};
export type LaneContainerProps = Props;
export default React.memo(LaneContainer);
