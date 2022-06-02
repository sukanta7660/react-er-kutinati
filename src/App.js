import './App.css';

import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Sukanta" heroName="Purkayastha">
        <p>This is children</p>
      </Greet>
      <Greet name="Swarup" heroName="Banik"/>
      <Greet name="Pipon" heroName="Deb"/>
    </div>
  );
}

export default App;
