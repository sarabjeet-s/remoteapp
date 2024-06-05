import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setChecked((checked) => !checked)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {checked && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
