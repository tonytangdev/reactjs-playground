import React, { useReducer, useRef } from 'react';
import Counter from "./components/counter";
import reducer from "./reducers"
import ActionButtons from './components/action-buttons';
import { INCREMENT, DECREMENT, RESET } from './reducers/actions';

import './App.css';

function initCounter({ count }) {
  return { count: count };
}

function App() {

  const [boysState, boysDispatch] = useReducer(reducer, { count: 0 }, initCounter)
  const [girlsState, girlsDispatch] = useReducer(reducer, { count: 0 }, initCounter)

  const buttonInc = useRef(null);

  return (
    <div>
      <div>
        Boys : <Counter count={boysState.count} />
        <ActionButtons
          ref={buttonInc}
          onIncrement={() => boysDispatch({ type: INCREMENT })}
          onDecrement={() => boysDispatch({ type: DECREMENT })}
          onReset={() => {
            boysDispatch({ type: RESET });
            buttonInc.current.style.backgroundColor = "red";
          }}
        />
      </div>
      <div>
        Girls : <Counter count={girlsState.count} />
        <ActionButtons
          count={girlsState.count}
          onIncrement={() => girlsDispatch({ type: INCREMENT })}
          onDecrement={() => girlsDispatch({ type: DECREMENT })}
          onReset={() => girlsDispatch({ type: RESET })}
        />
      </div>
    </div>
  );
}

export default App;
