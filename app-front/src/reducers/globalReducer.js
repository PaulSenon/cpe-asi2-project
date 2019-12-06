import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import userReducer from './userReducer';

const globalReducer = combineReducers ({
    cardReducer: cardReducer,
    userReducer: userReducer
});

export default globalReducer;