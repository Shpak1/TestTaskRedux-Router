import { combineReducers } from 'redux';

import todos from './ToDoReducer';


const rootReducer = combineReducers({
    todos
});

export default rootReducer;