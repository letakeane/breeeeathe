import { useEffect, useContext } from "react";
import GuideContext from "../GuideContext.jsx";
import anime from "animejs/lib/anime.es.js";
import "./Guide.css";

function Guide() {
  const [state, dispatch] = useContext(GuideContext);

  function translateToSize(ms) {
    let value = (ms / 20);

    return value > 300 ? 300 : value;
  }

  useEffect(() => {
    anime({
      targets: "#circle",
      keyframes: [
        {
          height: '100px',
          width: '100px',
          duration: 0
        },
        {
          width: `${translateToSize(state.duration)}px`,
          height: `${translateToSize(state.duration)}px`,
          duration: state.duration
        },
        {
          height: '100px',
          width: '100px',
          duration: state.duration
        },
      ],
      loop: true,
      easing: "easeInOutSine",
    });
  }, [
    state.duration
  ]);

  return (
    <section className="guide">
      <div id="circle"></div>
      {state.displayBreathInfo && (
        <p id="breath-info">
          <span id="bpm">{state.breathInfo}</span> breaths per minute
        </p>
      )}
    </section>
  );
}

export default Guide;
