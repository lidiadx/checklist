import logo from "./assets/check.svg";
import { data } from "./data-mock.js";
import Goal from "./Goal.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <div>
        <img src={logo} alt="logo" />
        <h1>Checklist app</h1>
      </div>
      <ul className="goals">
        {data.map((item) => (
          <Goal key={item.name} name={item.name} checks={item.checks}></Goal>
        ))}
      </ul>
    </main>
  );
}

export default App;
