
import './App.css';
import Counter from './comps/counter';
import EventTest from './comps/eventTest';
import Message from './comps/message';
import Test from './comps/test';
function App() {
  return (
    <div className="App">
      <Counter/>

      {/* React Work
      <Message  txt = "hallo" bg = "blue"/>
      <Message  txt =  "bay"  bg = "orange" /> 
      <EventTest/> */}
    </div>
  );
}

export default App;
