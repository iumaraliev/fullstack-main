import { useState } from 'react';


const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};


const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const hasFeedback = good + neutral + bad > 0;
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback ? (good - bad) / totalFeedback : 0;
  const positiveFeedbackPercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <h1>Customer Feedback</h1>
      <div>
        
        <Button text="Good" handleClick={handleGoodClick} />
        <Button text="Neutral" handleClick={handleNeutralClick} />
        <Button text="Bad" handleClick={handleBadClick} />
      </div>
      
      {hasFeedback ? (
        <div>
          <h2>Feedback Statistics</h2>
          <table>
          <tr><StatisticLine text="Total feedback" value={totalFeedback} /></tr>
          <tr><StatisticLine text="Average score" value={averageScore.toFixed(2)} /></tr>
          <tr><StatisticLine text="Percentage of positive feedback" value={`${positiveFeedbackPercentage.toFixed(2)}%`} /></tr>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;

