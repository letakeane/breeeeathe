import { useEffect, useContext } from "react";
import GuideContext from "../GuideContext.jsx";
import anime from "animejs/lib/anime.es.js";
import "./Guide.css";

function Guide() {
  const [state, dispatch] = useContext(GuideContext);

  useEffect(() => {
    anime({
      targets: "#circle",
      keyframes: [
        { scale: 2, easing: "easeInOutSine", duration: state.inDuration },
        { duration: state.inHoldDuration },
        { scale: 1, easing: "easeInOutSine", duration: state.outDuration },
        { duration: state.outHoldDuration },
        { scale: 1, easing: "easeInOutSine"}
      ],
      loop: true,
    });
  }, [state.inDuration, state.inHoldDuration, state.outDuration, state.outHoldDuration]);

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
