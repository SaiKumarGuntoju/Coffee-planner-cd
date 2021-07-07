import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  onClickOption = () => {
    const {updateSelectedCoffeePlan, questionType, option} = this.props
    const {optionTitle} = option
    updateSelectedCoffeePlan(questionType, optionTitle)
  }

  render() {
    const {option, selectedOption} = this.props
    const {optionTitle, description} = option

    const isOptionSelected = optionTitle === selectedOption
    const optionClassName = isOptionSelected
      ? 'option-btn selected-option'
      : 'option-btn'
    const optionTitleClassName = isOptionSelected
      ? 'option-title selected-option-title'
      : 'option-title'
    const optionDescriptionClassName = isOptionSelected
      ? 'option-description selected-option-description'
      : 'option-description'

    return (
      <li className="option-item">
        <button
          onClick={this.onClickOption}
          type="button"
          className="button-style"
        >
          <div className="coffee-header-container">
            <h1 className="option-heading">{optionTitle}</h1>
            <img
              alt="coffee"
              className="coffee-logo"
              src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
            />
          </div>
          <p className="para">{description}</p>
        </button>
      </li>
    )
  }
}

export default QuestionOption
