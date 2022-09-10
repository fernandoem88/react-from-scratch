import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { CardMessage, ErrorWrapper } from "@src/shared/components";
import { $asset } from "@src/shared/queries";
import CardsListContainer from "../CardsListContainer";
import * as sc from "./styled";

interface Props {
  id: string;
  pathId?: string;
}
const RootContainer: React.FC<Props> = (props) => {
  const [asset, isLoading, error] = $asset.useSelector([props.id], (s) =>
    s.getSelectedAssetByPathId(props.pathId)
  );

  const router = useRouter();
  const handleGoTo = useCallback(() => {
    router.push("/home");
  }, [router]);

  if (!props.id) return null;

  if (isLoading)
    return (
      <sc.Root>
        <CardMessage>Please wait...</CardMessage>
      </sc.Root>
    );

  if (error)
    return (
      <sc.Root>
        <ErrorWrapper>
          something went wrong {(error as any).message}
        </ErrorWrapper>
      </sc.Root>
    );

  if (!asset)
    return (
      <sc.Root>
        <CardMessage>no data</CardMessage>
      </sc.Root>
    );

  return (
    <sc.Root>
      <sc.ImageCover $bgUrl={asset.primaryImage.url}>
        <sc.GoTo onClick={handleGoTo}>{"< Home"}</sc.GoTo>
        <sc.CoverContent
          $colors={[
            asset.primaryImage.accentColor,
            asset.primaryImage.darkAccentColor,
          ]}
        >
          <sc.CoverTitle>{asset.title}</sc.CoverTitle>
          <sc.CoverDescr>{asset.description}</sc.CoverDescr>
        </sc.CoverContent>
      </sc.ImageCover>
      <CardsListContainer id={props.id} pathId={props.pathId || asset.path} />
    </sc.Root>
  );
};
export type IRootContainerProps = Props;
export default React.memo(RootContainer);
