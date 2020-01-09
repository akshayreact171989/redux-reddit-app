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
            "borderRadius": "4px",
            "padding": "8px 12px",
            letterSpacing: 0.5,
            backgroundColor: "#2f67e3",
            "fontSize": "20px",
            // boxShadow: "0px 0px 4px white",
            border: "0.5px solid white",
            color: "white",
            width: "max-content",
            "& option": {
                "textAlign": "center",
                fontSize: 20,
                "background": "rgba(0, 0, 0, 0.3)",
                "color": "#fff !important",
                "textShadow": "0 1px 0 rgba(0, 0, 0, 0.4)",
                "&:selected": {
                    color: "white"
                }
            }
        },
    },
    optionContainer: {
        minWidth: 200,
        color: "black !important"
    }
})