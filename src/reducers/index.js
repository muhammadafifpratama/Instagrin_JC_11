import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';

export default combineReducers({
    user: UserReducer,
    loginForm: LoginFormReducer
})