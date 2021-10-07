import Todo from './todo'
import {combineReducers} from 'redux'
const allReducers  = combineReducers({
    list : Todo
})
export default allReducers;