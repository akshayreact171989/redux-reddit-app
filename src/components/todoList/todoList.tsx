import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { todoListStyles } from './todoList.styles'
import { TodoFieldProps, Todo } from '../todo/todo'

export interface TodoListFieldProps {
    todos: TodoFieldProps[]
}

export interface TodoListDispatchProps {
    onTodoClick: (index: number) => {}
}

interface Props extends TodoListFieldProps, TodoListDispatchProps, WithStyles<typeof todoListStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { classes, onTodoClick, todos } = this.props
        return <div className={classes.todoList}>
            {todos.length > 0 && <ol >
                {todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
                ))}
            </ol>}
        </div>
    }
}

export const TodoListComponent = withStyles(todoListStyles)(Component)