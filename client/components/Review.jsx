import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import style from './style.css.js';
const Review = (props) => {
  var reviewerName = props.review.reviewerName;
  var content = props.review.content;
  var reviewerPic = props.review.reviewerPicture;
  var hostName = props.review.hostName;
  var createdAt = Date.parse(props.review.createdAt);

  const timeBetween = (createdAt) => {
    var current = Date.parse(new Date())
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(Math.abs(current - createdAt) / (oneDay));

    var number;
    var timeFrame;
    if (diffDays >= 365) {
      number = Math.floor(diffDays / 365);
      timeFrame = 'year';
    }
    else if (diffDays >= 30) {
      number = Math.floor(diffDays / 30);
      timeFrame = 'month';
    }
    else {
      number = diffDays;
      timeFrame = 'day';
    }

    if (number > 1) {
      timeFrame = timeFrame + "s"
    }
    return number + " " + timeFrame + " ago";
  }

  var timeDifference = timeBetween(createdAt);

  return (
    <div style={style.wrapper}>
      <div style={style.reviewTitle}>
        <img style={style.reviewerPicture} src={`${reviewerPic}`} alt="profile picture" height="42" width="42" />
        {reviewerName}
      </div>
      <div>
        {timeDifference}
      </div>
      <div>
        <ReadMoreAndLess charLimit={250} readMoreText="Read more" readLessText="Read less">
          {content}
        </ReadMoreAndLess>
      </div>
    </div>
  );
};

export default Review;