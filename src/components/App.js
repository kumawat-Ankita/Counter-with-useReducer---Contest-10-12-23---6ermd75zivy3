import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialSate ={count :0};
const App = () => {
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
    <span id="counter">Count:{state.count}</span>
     <button id="increment-btn" onclick={()=>dispatch ({type: 'increment'})}>Increment</button>
    <button id="decrement-btn" onclick={()=>dispatch ({type: 'decrementt'})}>Decrement</button>
    </div>
  )
}


export default App;
