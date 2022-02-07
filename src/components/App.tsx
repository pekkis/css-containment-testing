import { FC } from "react";

import { mainClass } from "./App.css";
import BothAxisContainer from "./BothAxisContainer";
import ChildOne from "./ChildOne";

const App: FC = () => {
  return (
    <>
      <main className={mainClass}>
        <h1>Container query demonstration</h1>

        <p>
          You need to turn on the container query flag in Chrome for this to
          work!
        </p>

        <h2>Small container x and y</h2>

        <p>Notice the borders of the child being nice and thin.</p>

        <BothAxisContainer x="small" y="small">
          <ChildOne>Child</ChildOne>
        </BothAxisContainer>

        <h2>Large container x and y</h2>

        <p>
          Now the borders are thicc. The child is the same but via container
          queries one can style it differently based on the container, not only
          viewport like you do with media queries.
        </p>

        <BothAxisContainer x="large" y="large">
          <ChildOne>Child</ChildOne>
        </BothAxisContainer>

        <h2>Large x but small y</h2>

        <p>Both x and y axis can be separately used as basis for changes.</p>

        <BothAxisContainer x="large" y="small">
          <ChildOne>Child</ChildOne>
        </BothAxisContainer>
      </main>
    </>
  );
};

export default App;
