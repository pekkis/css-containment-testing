import { style } from "@vanilla-extract/css";

export const baseClass = style({
  containerType: "size",
  margin: "1em 0",
  border: "5px dotted rgb(255, 0, 0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const largeYClass = style({
  height: "500px"
});
export const smallYClass = style({
  height: "250px"
});
export const largeXClass = style({
  width: "500px"
});
export const smallXClass = style({
  width: "250px"
});
