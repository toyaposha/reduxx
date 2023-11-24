import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increaseCounter } from './redux/actionss';
import { decreaseCounter } from './redux/actionss';
import { useDispatch, useSelector } from 'react-redux';
 
 function App(){
  const dispatch = useDispatch ();
  const count = useSelector((state)=> state.counter)
  return (
    <div className="App">
    <h1>Counter: {count}</h1>
     <button onClick={()=> dispatch(increaseCounter())}> Increase</button>
     <button onClick={()=>dispatch(decreaseCounter())}>Decrease</button>
    </div>
  );
}

export default App;
