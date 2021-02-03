import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onFeedback }) {
  return options.map(option => (
    <button
      type="button"
      data-action={options}
      // onClick={onFeedback}
      onClick={() => onFeedback(option)}
      key={option}
      className={s.button}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
