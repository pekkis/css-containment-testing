import { FC } from "react";

import styles from "./ChildOne.module.css";

const ChildOne: FC = ({ children }) => {
  return <div className={styles.base}>{children}</div>;
};

export default ChildOne;
