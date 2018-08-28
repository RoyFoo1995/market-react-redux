import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';


const store = createStore(reducers,
    applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}><AppRouter/></Provider>
    , document.getElementById('root'));
registerServiceWorker();
