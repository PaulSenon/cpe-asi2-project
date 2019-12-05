import {combineReducers} from 'redux';
import cardReducer from './cardReducer';

const globalReducer = combineReducers ({
    cardReducer: cardReducer
});

export default globalReducer;