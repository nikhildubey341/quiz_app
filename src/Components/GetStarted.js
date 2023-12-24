import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from './CustomButton'

function GetStarted() {
  const [options, setOptions] = useState(null)

  const loading = useSelector((state) => state.options.loading)

  const questionCategory = useSelector(
    (state) => state.options.question_category
  )
  const questionDifficulty = useSelector(
    (state) => state.options.question_difficulty
  )
  const questionType = useSelector((state) => state.options.question_type)
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`

    const handleLoadingChange = (value) => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value,
      })
    }

    handleLoadingChange(true)

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false)
        setOptions(response.trivia_categories)
      })
  }, [setOptions, dispatch])

  if (!loading) {
    return (
      <div>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to my Quiz App</h1>
        <CustomButton text="Get started!" />
      </div>
    )
  }

  return <p>LOADING...</p>
}
export default GetStarted