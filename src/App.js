import React from 'react';
import {useDispatch, useSelector} from "react-redux";


const App = () => {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()


    const plus = (num) => {
        dispatch({type:"INCREMENT", payload:num})
    }
    const minus = (num) => {
        if (count > 0){
            dispatch({type:"DECREMENT", payload:num})
        }
    }
    const plus_10 = (num) => {
        dispatch({type:"INCREMENT_10", payload:num})
    }
    const minus_10 = (num) => {
        if (count > 0){
            dispatch({type:"DECREMENT_10", payload:num})
        }
    }
    const reset = (num) => {
        dispatch({type:"RESET", payload:num})
    }

    return (
        <div>
          <span>{count}</span>
            <button onClick={() => plus(1)}>+</button>
            <button onClick={() => minus(1)}>-</button>
            <button onClick={() => plus_10(10)}>+10</button>
            <button onClick={() => minus_10(10)}>-10</button>
            <button onClick={() => reset(0)}>reset</button>
        </div>
    );
};

export default App;