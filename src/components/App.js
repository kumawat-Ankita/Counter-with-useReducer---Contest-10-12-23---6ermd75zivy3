import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState ={count :0};
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
    <span id="counter">Count:{state.count}</span>
     <button id="increment-btn" onClick={()=>dispatch ({type: 'increment'})}>Increment</button>
    <button id="decrement-btn" onClick={()=>dispatch ({type: 'decrement'})}>Decrement</button>
    </div>
  )
}


export default App;
