import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from './CustomButton'
import GetStarted from './GetStarted'

function Result() {
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  const GetStarted = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div>
      <h3>Final Score: {score}</h3>
      <button onClick={replay}>Try Again</button>
      <CustomButton text="Fetch new questions" />
      <button onClick={GetStarted}>Play Again</button>
    </div>
  )
}
export default Result