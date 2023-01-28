
import './App.css';
import { UseEffect } from './UseEffect';
import { UseLayoutEffect } from './UseLayoutEffect';
import { UseReducer } from './UseReducer';
import { UseRef } from './UseRef';
import UseState from './UseState';


function App() {

return(
  <div>
  <UseLayoutEffect/>
    <hr/>
  <UseRef/>
  <hr/>
   <UseEffect/>
  <hr/>
  <UseReducer/>
  <hr/>
  <UseState/> 
  </div>
)


}

export default App;
