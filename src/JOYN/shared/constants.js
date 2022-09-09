export const BREAKPOINTS = {
  xs: 0,
  sm: 320,
  md: 576,
  lg: 768,
  xl: 992,
  xxl: 1200,
  xxxl: 1400,
  xxxxl: 1900,
};
/*
type MediaMixinCSS = ThemedCssFunction<DefaultTheme>;

export const mediaScreen = Object.entries(BREAKPOINTS).reduce(
  (media: any, [key, value]) => {
    if (key === "xs") return media;
    media[key + "Up"] = (cssString: string) => css`
      @media screen and (min-width: ${value}px) {
        ${cssString}
      }
    `;
    media[key + "Down"] = (cssString: string) => css`
      @media screen and (max-width: ${value - 1}px) {
        ${cssString}
      }
    `;
    return media;
  },
  {}
) 

export const commonMedia = css`
  ${mediaScreen.smUp`
    max-width: 40rem;
  `}

  ${mediaScreen.mdUp`
    max-width: 56rem;
  `}

  ${mediaScreen.lgUp`
    max-width: 74rem;
  `}

  ${mediaScreen.xlUp`
    max-width: 86rem;
  `}
`;
*/
