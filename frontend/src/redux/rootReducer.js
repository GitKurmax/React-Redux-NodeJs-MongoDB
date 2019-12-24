import { combineReducers } from 'redux';
import getDataReducer from './reducers/getDataReducer';
import showModalReducer from './reducers/showModalReducer';
import inputChangesReducer from './reducers/inputChangesReducer';
import changeLocationReducer from './reducers/changeLocationReducer';


const rootReducer = combineReducers({
    getDataReducer,
    showModalReducer,
    inputChangesReducer,
    changeLocationReducer
});

export default rootReducer;