import {combineReducers} from 'redux';
import authReducer from './authReducer';
import transactions from './transactions';

export default combineReducers({
    auth: authReducer,
    transactions
});


