const FeedbackOptions = props => {
  const {
    good = 'good',
    neutral = 'neutral',
    bad = 'bad',
    onGoodFeedback,
    onNeutralFeedback,
    onBadFeedback,
  } = props;

  return (
    <>
      <button type="button" name={good} onClick={onGoodFeedback}>
        <span>Good</span>
      </button>
      <button type="button" name={neutral} onClick={onNeutralFeedback}>
        <span>Neutral</span>
      </button>
      <button type="button" name={bad} onClick={onBadFeedback}>
        <span>Bad</span>
      </button>
    </>
  );
};

export default FeedbackOptions;
