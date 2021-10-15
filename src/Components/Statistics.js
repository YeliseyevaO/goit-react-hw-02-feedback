import React from "react";

export default function Statistics({ stat, total, positivePercentage }) {
  const { good, neutral, bad } = stat;
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good:{good}</p>
        </li>
        <li>
          <p>Neutral:{neutral}</p>
        </li>
        <li>
          <p>Bad:{bad}</p>
        </li>
        <li>
          <p>Total:{total()}</p>
        </li>
        <li>
          <p>Positive feedback:{positivePercentage()}</p>
        </li>
      </ul>
    </div>
  );
}
