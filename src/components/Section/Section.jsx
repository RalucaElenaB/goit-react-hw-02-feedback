import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export const Section = () => {
  const [feedback, setFeedback] = useState({ bad: 0, neutral: 0, good: 0 });

  const handleGoodFeedback = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const handleNeutralFeedback = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const handleBadFeedback = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.bad + feedback.neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <section>
      <h1>Expresso cafe</h1>
      <h3>Your feedback is:</h3>
      <FeedbackOptions
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        onGoodFeedback={handleGoodFeedback}
        onNeutralFeedback={handleNeutralFeedback}
        onBadFeedback={handleBadFeedback}
      />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </section>
  );
};
