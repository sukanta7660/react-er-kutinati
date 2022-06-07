import './App.css';

import Message from "./components/Message";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import ClassClick from "./components/Buttons/ClassClick";
import FunctionClick from "./components/Buttons/FunctionClick";
import EventBind from "./components/Buttons/EventBind";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
       <Message />
        <hr/>
       <Counter />
        <hr/>
       <Welcome name="Sukanta" surname="Purkayastha">
           <small>Hi sukanta</small>
       </Welcome>

        <hr/>

        <Greet name="Sukanta" title="Purkayastha">
            <small>Hi sukanta</small>
        </Greet>

        <hr/>

        <ClassClick/>
        <FunctionClick/>

        <hr/>

        <EventBind/>

        <hr/>
        <PersonList />
    </div>
  );
}

export default App;
