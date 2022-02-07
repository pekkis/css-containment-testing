import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily: "Comic Sans MS, serif"
});

export const mainClass = style({
  margin: "1em"
});
