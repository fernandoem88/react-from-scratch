import React from "react";
import { Asset } from "../../types";
import * as sc from "./styled";

interface Props {
  asset: Asset;
  onClick: () => void;
  hidden?: boolean;
}
const Card: React.FC<Props> = (props) => {
  const { asset, onClick } = props;

  return (
    <sc.Root
      onClick={onClick}
      $bgUrl={asset.primaryImage.url}
      $hidden={props.hidden}
    >
      <sc.AspectRatio>
        <sc.Content>
          <sc.TitleWrapper
            $colors={[
              asset.primaryImage.accentColor,
              asset.primaryImage.darkAccentColor,
            ]}
          >
            <span>{asset.title}</span>
          </sc.TitleWrapper>
        </sc.Content>
      </sc.AspectRatio>
    </sc.Root>
  );
};
export type ICardProps = Props;
export default React.memo(Card);
