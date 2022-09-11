export const API_URL = "http://localhost:3030";

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

export const BEM =
  (block) =>
  (element = "", modifier = "") =>
    `${block}${element ? `__${element}` : ""}${
      modifier ? `--${modifier}` : ""
    }`;
