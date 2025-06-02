import logo from './logo.svg';
import './App.css';
import Great from './components/Greet';
import Welcome from './components/Welcome';
import Hi from './components/Hi';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

     <Hi/>
      {/* <Great/>
      <Welcome/> */}

    </div>
  );
}

export default App;
