import logo from './logo.svg';
import './App.css';

function App() {

  const url = "https://pokemon-api-carlton-james-jr.herokuapp.com/pokemon"
  fetch(url)
  return (
    <div className="App">
      Wassup Mack
    </div>
  );
}

export default App;
