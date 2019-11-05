import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, combineReducers,bindActionCreators } from './redux';
import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

import { increment, setName } from './actions/App';


const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

let store = createStore(reducer);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});

/*返回 action 的函数就叫 actionCreator*/

// /*自增*/
// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'SET_NAME',
//   name: '前端九部2号'
// });

const actions = bindActionCreators({ increment, setName }, store.dispatch);

/*注意：我们可以把 actions 传到任何地方去*/
/*任何地方在实现自增的时候，根本不知道 dispatch，actionCreator等细节*/
actions.increment(); /*自增*/
actions.increment(); /*自增*/
actions.setName('duuliy'); /*修改 info.name*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
