import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'
import './index.css'

class CoffeePlanner extends Component {
  state = {
    selectedCoffeePlan: {
      DRINK_TYPE: '',
      COFFEE_TYPE: '',
      QUANTITY: '',
      GRIND_TYPE: '',
      DELIVER_TYPE: '',
    },
    showSummary: false,
  }

  getSelectedOption = questionType => {
    const {selectedCoffeePlan} = this.state
    return selectedCoffeePlan[questionType]
  }

  updateSelectedCoffeePlan = (questionType, questionTitle) => {
    const {selectedCoffeePlan} = this.state
    const newSelectedCoffeePlan = {...selectedCoffeePlan}

    newSelectedCoffeePlan[questionType] = questionTitle
    console.log(newSelectedCoffeePlan)
    this.setState({selectedCoffeePlan: newSelectedCoffeePlan})
  }

  renderCoffeePlanerQuestions = () => {
    const {coffeePlannerList} = this.props
    return (
      <ul className="coffee-planner-question-list">
        {coffeePlannerList.map(coffeeQuestion => (
          <CoffeePlannerQuestion
            key={coffeeQuestion.id}
            getSelectedOption={this.getSelectedOption}
            updateSelectedCoffeePlan={this.updateSelectedCoffeePlan}
            coffeeQuestion={coffeeQuestion}
          />
        ))}
      </ul>
    )
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state
    const {
      COFFEE_TYPE,
      QUANTITY,
      DELIVER_TYPE,
      GRIND_TYPE,
      DRINK_TYPE,
    } = selectedCoffeePlan

    if (
      COFFEE_TYPE !== '' &&
      QUANTITY !== '' &&
      DRINK_TYPE !== '' &&
      GRIND_TYPE !== '' &&
      DELIVER_TYPE !== ''
    ) {
      return true
    }
    return false
  }

  renderSummerySection = () => {
    const {showSummary, selectedCoffeePlan} = this.state
    const {
      DRINK_TYPE,
      COFFEE_TYPE,
      QUANTITY,
      GRIND_TYPE,
      DELIVER_TYPE,
    } = selectedCoffeePlan

    if (showSummary) {
      return (
        <div className="summeryContainer">
          {this.isAllOptionsSelected() ? (
            <p className="summery-description">
              I Drink my Coffee as{' '}
              <span className="span-element">{DRINK_TYPE}</span>, with a{' '}
              <span className="span-element">{COFFEE_TYPE}</span> type of bean,{' '}
              <span className="span-element">{QUANTITY}</span> of{' '}
              <span className="span-element">{GRIND_TYPE}</span> ground,send to
              me <span className="span-element">{DELIVER_TYPE}</span>
            </p>
          ) : (
            <p className="summery-description">Kindly Selecte All Options</p>
          )}
        </div>
      )
    }
    return null
  }

  onClickMyPlan = () => {
    this.setState({showSummary: true})
  }

  renderBodySection = () => (
    <div className="body-container">
      {this.renderCoffeePlanerQuestions()}
      <div className="button-container">
        <button onClick={this.onClickMyPlan} className="button" type="button">
          Create my plan
        </button>
      </div>
      {this.renderSummerySection()}
    </div>
  )

  renderHeaderSection = () => (
    <div className="header-section">
      <div className="header-textContent">
        <h1 className="heading">Create a Plan</h1>
        <p className="description">
          We offer an assortment of the best artesian coffees from the globe
          delivered fresh to the door create your plan with this
        </p>
      </div>
    </div>
  )

  render() {
    return (
      <div className="app-container">
        {this.renderHeaderSection()}
        {this.renderBodySection()}
      </div>
    )
  }
}

export default CoffeePlanner
