import { css, DefaultTheme, ThemedCssFunction } from "styled-components";

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
) as {
  /**@description ( min-width: 320px )*/
  smUp: MediaMixinCSS;
  /**@description ( min-width: 576px )*/
  mdUp: MediaMixinCSS;
  /**@description ( min-width: 768px )*/
  lgUp: MediaMixinCSS;
  /**@description ( min-width: 992px )*/
  xlUp: MediaMixinCSS;
  /**@description ( min-width: 1200px )*/
  xxlUp: MediaMixinCSS;
  /**@description ( min-width: 1400px )*/
  xxxlUp: MediaMixinCSS;
  /**@description ( min-width: 1900px )*/
  xxxxlUp: MediaMixinCSS;

  /**@description ( max-width: 319px )*/
  smDown: MediaMixinCSS;
  /**@description ( max-width: 575px )*/
  mdDown: MediaMixinCSS;
  /**@description ( max-width: 767px )*/
  lgDown: MediaMixinCSS;
  /**@description ( max-width: 991px )*/
  xlDown: MediaMixinCSS;
  /**@description ( max-width: 1199px )*/
  xxlDown: MediaMixinCSS;
  /**@description ( max-width: 1399px )*/
  xxxlDown: MediaMixinCSS;
  /**@description ( max-width: 1899px )*/
  xxxxlDown: MediaMixinCSS;
};

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
