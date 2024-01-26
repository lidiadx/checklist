/* eslint-disable react/prop-types */
//TODO: prop-types validation

import { days, renderStatus} from "./properties.js";
import "./Goal.css";

function Goal({ name, checks }) {
  return (
    <li>
      <div className="goal_container">
        <span className="goal_name">{name}:</span>
        {checks.map((check, index) => (<span key={index} className={days[index]}>{renderStatus(check)}</span>))}
      </div>
    </li>
  );
}

export default Goal;
