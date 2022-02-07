import { VFC } from "react";
import App from "./components/App";

const Root: VFC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <App />
    </>
  );
};

export default Root;
