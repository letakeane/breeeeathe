import { useReducer } from 'react'
import GuideContext from '../GuideContext.jsx'
import Guide from '../Guide/Guide.jsx'
import Controls from '../Controls/Controls.jsx'
import './App.css'

const initialState = {
  inDuration: 4000,
  outDuration: 4000,
  inHoldDuration: 0,
  outHoldDuration: 0,
  displayBreathInfo: true,
  breathInfo: 7.5
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_IN_DURATION':
      return {...state, inDuration: action.duration}
    case 'SET_OUT_DURATION':
      return {...state, outDuration: action.duration}
    case 'SET_IN_HOLD_DURATION':
      return {...state, inHoldDuration: action.duration}
    case 'SET_OUT_HOLD_DURATION':
      return {...state, outHoldDuration: action.duration}
    case 'SET_DISPLAY_BREATH_INFO':
      return {...state, displayBreathInfo: action.display}
    case 'SET_BREATH_INFO':
      return {...state, breathInfo: action.info}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInDuration = duration => {
    const action = { type: 'SET_IN_DURATION', duration: duration};
    dispatch(action);
  }

  const setOutDuration = duration => {
    const action = { type: 'SET_OUT_DURATION', duration: duration};
    dispatch(action);
  }
  
  const setInHoldDuration = duration => {
    const action = { type: 'SET_IN_HOLD_DURATION', duration: duration };
    dispatch(action);
  }

  const setOutHoldDuration = duration => {
    const action = { type: 'SET_OUT_HOLD_DURATION', duration: duration };
    dispatch(action);
  }

  const setDisplayBreathInfo = display => {
    const action = { type: 'SET_DISPLAY_BREATH_INFO', display: display };
    dispatch(action);
  }

  const setBreathInfo = info => {
    const action = { type: 'SET_BREATH_INFO', info: info };
    dispatch(action);
  }

  return (
    <GuideContext.Provider value={[state, dispatch]} >
      <main>
        <Guide />
        <button id="ctrls-btn"></button>
        <Controls />
      </main>
    </GuideContext.Provider>
  )
}

export default App
