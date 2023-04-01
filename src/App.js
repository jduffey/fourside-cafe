import restaurantLogo from './restaurant-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={restaurantLogo} className="App-logo" alt="logo" />
        <p>
          Fourside Cafe - 7
        </p>
        <a
          className="App-link"
          href="https://www.flaticon.com/free-icons/dinner"
          target="_blank"
          rel="noopener noreferrer"
          title="dinner icons"
        >
          Dinner icons created by monkik - Flaticon
        </a>
      </header>
    </div>
  );
}

export default App;
