import logo from "./assets/check.svg";
import Goal from  "./Goal.jsx";
import "./App.css";

function App() {
  return (
      <main>
        <div>
          <img src={logo} alt="logo" />
          <h1>Checklist app</h1>
        </div>
        <Goal name="go to bed before 11pm"></Goal>
        <Goal name="morning routine"></Goal>
        <Goal name="daily review"></Goal>
      </main>
  );
}

export default App;
