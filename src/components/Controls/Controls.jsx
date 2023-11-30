import { useContext } from "react";
import GuideContext from "../GuideContext.jsx";
import "./Controls.css";

function Controls({ setDisplayControls }) {
  const [state, dispatch] = useContext(GuideContext);

  return (
    <section id="menu">
      <button
        id="ctrls-btn"
        onClick={() => setDisplayControls(!state.displayControls)}
        className={state.displayControls ? "show-button" : "hide-button"}
      />
      <section
        className={state.displayControls ? "show" : "hide"}
        id="controls"
        onBlur={() => setDisplayControls(false)}
      >
        <h2>Controls</h2>
        <p>Something here</p>
        <p>Something here</p>
        <p>Something here</p>
        <p>Something here</p>
        <p>Something here</p>
        <div id="credits">
          <p className="credit">
            Ui icons created by{" "}
            <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">
              Icon mania
            </a>{" "}
            - Flaticon
          </p>
          <p className="credit">
            Settings icons created by
            <a
              href="https://www.flaticon.com/free-icons/settings"
              title="settings icons"
            >
              dmitri13
            </a>{" "}
            - Flaticon
          </p>
          <p className="credit">
            Close icons created by{" "}
            <a
              href="https://www.flaticon.com/free-icons/close"
              title="close icons"
            >
              Pixel perfect
            </a>{" "}
            - Flaticon
          </p>
        </div>
      </section>
    </section>
  );
}

export default Controls;
