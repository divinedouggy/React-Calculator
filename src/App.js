
import './App.css';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';

function App() {
  return (
    <div className="App">
      <div className='header'>Calculator</div>
      <div className='as'>
      <Addition/>
      <Subtraction/>
      </div>
      <div className='md'>
      <Multiplication/>
      <Division/>
      </div>
    </div>
  );
}

export default App;
