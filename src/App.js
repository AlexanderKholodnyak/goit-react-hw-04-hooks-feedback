import React, { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/NotificationMessage';

function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onFeedbackRefresh = ({ target }) => {
  //   const type = target.dataset.action;
  //   this.setState(prevState => {
  //     return { [type]: prevState[type] + 1 };
  //   });
  // };

  const options = ['good', 'neutral', 'bad'];

  const onFeedbackRefresh = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };
  const onTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  const onPositive = () => {
    return onTotalFeedback() ? Math.round((good / onTotalFeedback()) * 100) : 0;
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  // const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onFeedback={onFeedbackRefresh}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {onTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={onTotalFeedback()}
            positivePercentage={onPositive()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </>
  );
  // }
}

export default App;
