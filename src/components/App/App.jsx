import { useReducer } from 'react'
import GuideContext from '../GuideContext.jsx'
import Guide from '../Guide/Guide.jsx'
import Controls from '../Controls/Controls.jsx'
import './App.css'

const initialState = {
  duration: 4000,
  displayBreathInfo: true,
  breathInfo: 7.5,
  displayControls: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_DURATION':
      return {...state, duration: action.duration}
    case 'SET_DISPLAY_BREATH_INFO':
      return {...state, displayBreathInfo: action.display}
    case 'SET_BREATH_INFO':
      return {...state, breathInfo: action.info}
    case 'SET_DISPLAY_CONTROLS':
      return {...state, displayControls: action.display}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDuration = duration => {
    const action = { type: 'SET_DURATION', duration: duration};
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

  const setDisplayControls = display => {
    const action = { type: 'SET_DISPLAY_CONTROLS', display: display };
    dispatch(action);
  }

  return (
    <GuideContext.Provider value={[state, dispatch]} >
      <main>
        <Guide />
        <Controls 
          setDisplayControls={setDisplayControls} 
          setBreathInfo={setBreathInfo}
          setDisplayBreathInfo={setDisplayBreathInfo}
          setDuration={setDuration}
        />
      </main>
    </GuideContext.Provider>
  )
}

export default App
