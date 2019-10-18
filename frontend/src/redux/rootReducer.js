import { combineReducers } from 'redux';
import getDataReducer from './reducers/getDataReducer';
import showModalReducer from './reducers/showModalReducer';
import inputChangesReducer from './reducers/inputChangesReducer';


const rootReducer = combineReducers({
    getDataReducer,
    showModalReducer,
    inputChangesReducer
});

export default rootReducer;