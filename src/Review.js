import React from 'react';
import './Review.css';

const Review = (props) => {
  return (<div className="review">
            <h2>{props.title}</h2>
            <p>"{props.content}"</p>
            <span>- {props.meta}</span>
          </div>);
};

export default Review;
