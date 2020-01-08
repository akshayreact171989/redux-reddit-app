import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'

const templateObj: CSSProperties = {
}

export const templateStyles = createStyles({
    picker: {
        display: "flex",
        justifyContent: "center"
    },
    picker__Container: {
        display: "flex",
        justifyContent: "center",
        "& select": {
            "borderRadius": "24px",
            "padding": "8px",
            "fontSize": "20px",
            boxShadow: "2px 2px 4px #a8a8a8",
            width: 150,
            "& option": {
                "textAlign": "center",
                fontSize: 20,
            }
        }
    }
})