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
    const breathsPerMinute = (60 / (e.target.value * 2)).toFixed(1);
    setBreathInfo(breathsPerMinute);
    setDuration(translateToMS(e.target.value));
  }

  function onToggleInput(e) {
    // e.preventDefault();
    setDisplayBreathInfo(!state.displayBreathInfo);
  }

  return (
    <>
      <button
        className="btn btn-light btn-sm"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        data-bs-backdrop="true"
        aria-controls="offcanvasBottom"
      >
        Controls
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="controlsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="controlsLabel">
            Controls
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small">
          <label className="form-label" htmlFor="duration">
            Duration:&nbsp;
            <span id="duration-display">{translateToSlider(state.duration)}</span> seconds
          </label>
          <input
              className="form-range"
              type="range"
              name="duration"
              id="duration"
              min="3"
              max="10"
              step="0.5"
              defaultValue={translateToSlider(state.duration)}
              onInput={onSliderInput}
            />
            <div className="form-check form-switch">
              <input
                className="form-check-input form-control"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={state.displayBreathInfo}
                onInput={onToggleInput}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
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
          </div>
        </div>
    </>
  );
}

export default Controls;
