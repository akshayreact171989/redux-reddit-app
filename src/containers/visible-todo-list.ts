import { initialState } from './../reducers/main-reducer';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoListComponent, TodoListFieldProps, TodoListDispatchProps } from '../components/todoList/todoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos: [], filter: any) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((t: any) => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((t: any) => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state: any): TodoListFieldProps => ({
    todos: getVisibleTodos(state.todosReducer, state.visibilityFilterReducer)
})

const mapDispatchToProps = (dispatch: any): TodoListDispatchProps => ({
    onTodoClick: (index: number) => dispatch(toggleTodo(index))
})

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent)
