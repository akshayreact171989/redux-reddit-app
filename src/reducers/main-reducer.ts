import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions'
import todosReducer from './todos'
import visibilityFilterReducer from './visibilityFilter'


export const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [
        {
            text: "First Todo text",
            completed: true,
            id: 0
        },
        {
            text: "Second Todo text",
            completed: false,
            id: 1
        },
        {
            text: "Third Todo text",
            completed: true,
            id: 2
        },
    ]
}

export default combineReducers({
    todosReducer, visibilityFilterReducer
})
