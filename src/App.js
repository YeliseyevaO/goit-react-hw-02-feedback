import "./App.css";
import React from "react";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Sections from "./Components/Sections";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const oneState = Object.values(this.state);
    console.log(oneState);
    const plus = oneState.reduce((total, value) => total + value, 0);
    return plus;
  };
  countPositiveFeedbackPercentage = () => {
    const oneState = Object.values(this.state);
    const plus = oneState.reduce((total, value) => total + value, 0);
    return Math.floor((100 * this.state.good) / plus);
  };

  render() {
    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClickButton}
          />
          <Statistics
            stat={this.state}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Sections>
      </>
    );
  }
}

export default App;
