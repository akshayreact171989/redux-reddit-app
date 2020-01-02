import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'

const addTodoObj: CSSProperties = {
}

export const addTodoStyles = createStyles({
    addTodo: {
        display: "flex",
        justifyContent: "center"
    },
    addTodo__input: {
        margin: "8px 0px",
        width: "88%",
        borderRadius: "4px",
        padding: "8px",
        border: "1px solid lightgrey",
        fontSize: 18,
        fontFamily: "'Open Sans' !important",

    },
    addTodo__addButton: {
        margin: "8px 0px 8px 8px",
        cursor: "pointer",
        border: "none",
        fontSize: 18,
        color: "grey",
        letterSpacing: "1px",
        fontWeight: 700,
        "& img": {
            height: 36,
            width: 36,
            border: "2px solid white",
            borderRadius: 25
        }
    }
})