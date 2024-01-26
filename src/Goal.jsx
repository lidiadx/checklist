/* eslint-disable react/prop-types */ 
//TODO: prop-types validation

import "./Goal.css";

function Goal(props) {
  return (
    <div className="goal_container">
      <span className="goal_name">{props.name}</span>
      <span>+</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>1/7</span>
    </div>
  );
}

export default Goal;
