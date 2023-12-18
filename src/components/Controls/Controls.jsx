import { useContext } from "react";
import GuideContext from "../GuideContext.jsx";
import "./Controls.css";

function Controls({
  setDisplayControls,
  setBreathInfo,
  setDisplayBreathInfo,
  setDuration,
}) {
  const [state, dispatch] = useContext(GuideContext);

  const translateToSlider = (ms) => {
    return ms / 1000;
  };

  function translateToMS(wholeSeconds) {
    return wholeSeconds * 1000;
  }

  function onSliderInput(e) {
    // e.preventDefault();
    setBreathInfo(60 / (e.target.value * 2));
    setDuration(translateToMS(e.target.value));
  }

  function onToggleInput(e) {
    // e.preventDefault();
    setDisplayBreathInfo(!state.displayBreathInfo);
  }

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
      >
        <h2>Controls</h2>
        <label htmlFor="duration">
          Duration:{" "}
          <span id="duration-display">{translateToSlider(state.duration)}</span>{" "}
          seconds
        </label>
        <input
          type="range"
          name="duration"
          id="duration"
          min="3"
          max="10"
          defaultValue={translateToSlider(state.duration)}
          onInput={onSliderInput}
        />
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={state.displayBreathInfo}
            onInput={onToggleInput}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Show breaths per minute
          </label>
        </div>

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
