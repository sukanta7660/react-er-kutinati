import './App.css';

import Message from "./components/Message";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import ClassClick from "./components/Buttons/ClassClick";
import FunctionClick from "./components/Buttons/FunctionClick";

function App() {
  return (
    <div className="App">
       <Message />
       <Counter />
       <Welcome name="Sukanta" surname="Purkayastha">
           <small>Hi sukanta</small>
       </Welcome>

        <Greet name="Sukanta" title="Purkayastha">
            <small>Hi sukanta</small>
        </Greet>

        <ClassClick/>
        <FunctionClick/>
    </div>
  );
}

export default App;
