import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { addTodoStyles } from './addTodo.styles'
import { FormEvent } from 'react'
import textPlusIcon from '../../img/text-plus-icon.png'

export interface AddTodoFieldProps {
}

export interface AddTodoDispatchProps {
    addTodoClick: (text: string) => {}
}

interface Props extends AddTodoFieldProps, AddTodoDispatchProps, WithStyles<typeof addTodoStyles> { }
interface State {
    input: string
}

class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            input: ""
        }
    }

    handleChange = (input: string) => {
        this.setState({ input });
    }

    handleSubmit = () => {
        if (this.state.input.trim()) {
            this.props.addTodoClick(this.state.input);
            this.setState({ input: "" });
        }
    }

    handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode == 13 && this.state.input.trim()) {
            e.preventDefault()
            this.handleSubmit();
            this.setState({ input: "" });
        }
        else if (!this.state.input.trim()) {
            this.setState({ input: "" });
        }
    }

    render() {
        const { classes } = this.props
        return <div className={classes.addTodo}
        >
            <input
                onChange={e => this.handleChange(e.target.value)}
                value={this.state.input}
                className={classes.addTodo__input}
                placeholder="Add your first todo here"
                onKeyDown={this.handleInputKeyDown}


            />
            <div onClick={this.handleSubmit}
                className={classes.addTodo__addButton}><img src={textPlusIcon} ></img></div>
        </div>
    }
}

export const AddTodoComponent = withStyles(addTodoStyles)(Component)