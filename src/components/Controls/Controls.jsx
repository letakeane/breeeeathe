import { useContext } from "react";
import GuideContext from "../GuideContext.jsx";
import "./Controls.css";

function Controls({
  setDisplayControls,
  setInDuration,
  setInHoldDuration,
  setOutDuration,
  setOutHoldDuration,
}) {
  const [state, dispatch] = useContext(GuideContext);

  const translateToSlider = (ms) => {
    return ms / 1000;
  };

  function translateToMS(wholeSeconds) {
    return wholeSeconds * 1000;
  };

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
        // onBlur={() => setDisplayControls(false)}
      >
        <h2>Controls</h2>
        <label htmlFor="in-duration">In duration: <span id="in-duration-display">{translateToSlider(state.inDuration)}</span> seconds</label>
        <input
          type="range"
          name="in-duration"
          id="in-duration"
          min="0"
          max="10"
          defaultValue={translateToSlider(state.inDuration)}
          onInput={(e) => setInDuration(translateToMS(e.target.value))}
        />
        <label htmlFor="in-hold-duration">In hold duration: <span id="in-hold-duration-display">{translateToSlider(state.inHoldDuration)}</span> seconds</label>
        <input
          type="range"
          name="in-hold-duration"
          id="in-hold-duration"
          min="0"
          max="10"
          defaultValue={translateToSlider(state.inHoldDuration)}
          onInput={(e) => setInHoldDuration(translateToMS(e.target.value))}
        />
        <label htmlFor="out-duration">Out duration: <span id="out-duration-display">{translateToSlider(state.outDuration)}</span> seconds</label>
        <input
          type="range"
          name="out-duration"
          id="out-duration"
          min="0"
          max="10"
          defaultValue={translateToSlider(state.outDuration)}
          onInput={(e) => setOutDuration(translateToMS(e.target.value))}
        />
        <label htmlFor="out-hold-duration">Out hold duration: <span id="out-hold-duration-display">{translateToSlider(state.outHoldDuration)}</span> seconds</label>
        <input
          type="range"
          name="out-hold-duration"
          id="out-hold-duration"
          min="0"
          max="10"
          defaultValue={translateToSlider(state.outHoldDuration)}
          onInput={(e) => setOutHoldDuration(translateToMS(e.target.value))}
        />

        <div id="credits">
          <p className="credit">
            Ui icons created by&nbsp;
            <a href="https://www.flaticon.com/free-icons/ui" title="ui icons">
              Icon mania
            </a>
            &nbsp; - Flaticon
          </p>
          <p className="credit">
            Settings icons created by
            <a
              href="https://www.flaticon.com/free-icons/settings"
              title="settings icons"
            >
              dmitri13
            </a>
            &nbsp; - Flaticon
          </p>
          <p className="credit">
            Close icons created by&nbsp;
            <a
              href="https://www.flaticon.com/free-icons/close"
              title="close icons"
            >
              Pixel perfect
            </a>
            &nbsp; - Flaticon
          </p>
        </div>
      </section>
    </section>
  );
}

export default Controls;
