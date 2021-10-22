import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
  const title = 'Welcome to my world';
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;
