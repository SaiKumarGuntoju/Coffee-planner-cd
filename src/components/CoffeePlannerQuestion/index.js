import QuestionOption from '../QuestionOption'
import './index.css'

const CoffeePlannerQuestion = props => {
  const {coffeeQuestion, getSelectedOption, updateSelectedCoffeePlan} = props
  const {questionType, questionTitle, optionsList} = coffeeQuestion

  const selectedOption = getSelectedOption(questionType)

  return (
    <li className="question-container">
      <h1 className="coffee-question-heading">{questionTitle}</h1>
      <ul className="coffee-options-list">
        {optionsList.map(option => (
          <QuestionOption
            key={option.id}
            questionType={questionType}
            selectedOption={selectedOption}
            updateSelectedCoffeePlan={updateSelectedCoffeePlan}
            option={option}
          />
        ))}
      </ul>
    </li>
  )
}

export default CoffeePlannerQuestion
