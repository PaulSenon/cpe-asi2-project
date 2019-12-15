import {combineReducers} from 'redux';
import cardReducer from './cardReducer';
import userReducer from './userReducer';
import connectedReducer from './connectedReducer';

const globalReducer = combineReducers ({
    cardReducer: cardReducer,
    userReducer: userReducer,
    connectedReducer: connectedReducer
});

export default globalReducer;