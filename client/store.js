import redux from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


let store = createStore(reducer.reducer, applyMiddleware(thunk));
module.exports = store;
