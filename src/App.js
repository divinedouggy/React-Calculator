
import './App.css';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';

function App() {
  return (
    <div className="App">
      <Addition/>
      <Subtraction/>
      <Multiplication/>
      <Division/>
    </div>
  );
}

export default App;
