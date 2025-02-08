import css from './MovieReviews.module.css';
import { useState } from 'react';

function ReviewItem({ author, created_at, content }) {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 300;

  const toggleExpand = () => setExpanded(!expanded);
  return (
    <li className={css.item}>
      <p className={css.text}>
        <span className={css.accent}> Author: </span> {author}
      </p>
      <p className={css.text}>
        <span className={css.accent}> Date: </span>
        {created_at.slice(0, 10)}
      </p>
      <p className={css.text}>
        {expanded ? content : `${content.slice(0, previewLength)}...`}
      </p>
      {content.length > previewLength && (
        <button className={css.readMore} onClick={toggleExpand}>
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </li>
  );
}

export default ReviewItem;
