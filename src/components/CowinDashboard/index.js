// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusForView = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {details: {}, apiStatus: apiStatusForView.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusForView.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()

      const update = {
        lastWeek: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      console.log(update)
      this.setState({details: update, apiStatus: apiStatusForView.success})
    } else{
      this.setState({apiStatus: apiStatusForView.failure})
    }
  }

  inProgressView = () => {
    return (
      <div data-testid="loader" className="loader-style">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    )
  }
  failureView = () => {
    return (
      <div className="container-failure-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="image-failure-view"
        />
        <h1 className="failure-view-text">Something went wrong</h1>
      </div>
    )
  }

  successView = () => {
    const {details} = this.state
    const {lastWeek, vaccinationByAge, vaccinationByGender} = details

    return (
      <div>
        <VaccinationCoverage lastWeek={lastWeek} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </div>
    )
  }

  resultPage = () =>{
    const{apiStatus} = this.state;
    switch(apiStatus){
      case apiStatusForView.inProgress:
        return this.inProgressView();
      case apiStatusForView.success:
        return this.successView();
      case apiStatusForView.failure:
        return this.failureView();
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="background-container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="heading-text">Co-WIN</h1>
        </nav>
        <h1 className="heading-cowin-Vaccination-text">
          CoWIN Vaccination In India
        </h1>
        {this.resultPage()}
      </div>
    )
  }
}
export default CowinDashboard
