import { FC } from "react";
import cx from "clsx";
import {
  baseClass,
  largeXClass,
  smallXClass,
  largeYClass,
  smallYClass
} from "./BothAxisContainer.css";

type Props = {
  x?: "large" | "small";
  y?: "large" | "small";
};

const BothAxisContainer: FC<Props> = ({
  children,
  y = "small",
  x = "small"
}) => {
  const classes = cx(baseClass, {
    [largeYClass]: y === "large",
    [smallYClass]: y !== "large",
    [largeXClass]: x === "large",
    [smallXClass]: x !== "large"
  });

  return <div className={classes}>{children}</div>;
};

export default BothAxisContainer;
