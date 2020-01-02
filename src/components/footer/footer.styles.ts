import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'

const footerObj: CSSProperties = {
}

export const footerStyles = createStyles({
    footer: {
        margin: "24px 0px",
    },
    filter__filterContainer: {
        cursor: "pointer",
        width: "25%",
        borderRadius: 4,
        fontWeight: 900,
        letterSpacing: 1,
        backgroundColor: "white",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
    },
    filter__mainContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",

        alignContent: "center",
    }
})