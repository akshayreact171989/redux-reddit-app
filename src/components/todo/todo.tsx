import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { todoStyles } from './todo.styles'

export interface TodoFieldProps {
    text: string
    completed: boolean
    id: number
}

export const firstLetterCapital = (text: string) => (text && (text = text.trim()) && text.length > 0) ? (text[0].toLocaleUpperCase() + text.substr(1).toLocaleLowerCase()) : ""

export interface TodoDispatchProps {
    onClick: () => {}
}

interface Props extends TodoFieldProps, TodoDispatchProps, WithStyles<typeof todoStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { classes, completed, text, onClick } = this.props
        return <div className={classes.todo}>
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? '#E80000' : 'none',
                }}
            >
                {firstLetterCapital(text)}
            </li>
        </div>
    }
}

export const Todo = withStyles(todoStyles)(Component)