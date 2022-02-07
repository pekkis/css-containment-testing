import { FC } from "react";

import { baseClass } from "./XAxisContainer.css";

const XAxisContainer: FC = ({ children }) => {
  return <div className={baseClass}>{children}</div>;
};

export default XAxisContainer;
