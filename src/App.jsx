import logo from "./assets/check.svg";
import "./App.css";

function App() {
  return (
      <main>
        <div>
          <img src={logo} alt="logo" />
          <h1>Checklist app</h1>
        </div>
        <div>
          <span>go to bed before 11 </span>
          <span>+ </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>1/7</span>
        </div>
        <div>
          <span>morning routine </span>
          <span>+ </span>
          <span>+ </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>2/7</span>
        </div>
        <div>
          <span>daily review </span>
          <span>- </span>
          <span>+ </span>
          <span>+ </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>- </span>
          <span>2/7</span>
        </div>
      </main>
  );
}

export default App;
