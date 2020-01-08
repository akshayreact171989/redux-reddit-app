import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { smAndUp, mdAndUp, lgAndUp } from '../../styles/styles'

export const templateStyles = createStyles({
    asyncApp: {
        "textAlign": "left",
        "color": "#282828",
        width: "100%",
        "margin": "auto",
        "fontFamily": "'Open Sans', sans-serif !important",
        "padding": "8px",
        // "backgroundImage": "linear-gradient(141deg, #8ad2b2 0%, #1fdb99 44%, #3fc4f5 75%)",
        "borderRadius": "8px",
        "boxShadow": "0 2px 4px 0 rgba(51,51,51,.21)",
        "border": "1px solid #e8e8e8",
        background: "rgba(255,255,255,0.6)",
        "& h1": {
            "textAlign": "center",
            "color": "white",
            textTransform: "uppercase",
            "padding": "12px 24px",
            "margin": "0"
        },
        "& h2": {
            fontSize: 16,
            margin: "12px",
            [mdAndUp()]: {
                fontSize: 18,
            },
        }
    },
    headerContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    asyncApp__subHeading: {
        display: "flex",
        justifyContent: "center",
        fontSize: 20,
    }
})