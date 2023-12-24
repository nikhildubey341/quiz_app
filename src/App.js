import { useSelector } from 'react-redux'

import GetStarted from './Components/GetStarted'
import Question from './Components/Question'
import Result from './Components/Result'

import './App.css'

function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <GetStarted />
  } else {
    component = <Result />
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  )
}

export default App