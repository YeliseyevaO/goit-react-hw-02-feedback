import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const names = Object.keys(options);

  return (
    <>
      <ul className="ButtonList">
        <li>
          <button
            name={names[0]}
            className=""
            type="button"
            onClick={onLeaveFeedback}
          >
            Good
          </button>
        </li>
        <li>
          <button
            name={names[1]}
            className=""
            type="button"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            name={names[2]}
            className=""
            type="button"
            onClick={onLeaveFeedback}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}
