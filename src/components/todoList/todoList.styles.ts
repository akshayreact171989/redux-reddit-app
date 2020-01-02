import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'

const todoListObj: CSSProperties = {
}

export const todoListStyles = createStyles({
    todoList: {
        backgroundColor: "rgba(0,0,0,0.16)",
        borderRadius: 4,
        "& ol": {
            padding: "8px 32px",
            marginBottom: 0,

        }
    },
})