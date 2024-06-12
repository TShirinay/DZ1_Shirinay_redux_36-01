import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import counterReducer from "./redux/counter";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store  = createStore(counterReducer)

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);


