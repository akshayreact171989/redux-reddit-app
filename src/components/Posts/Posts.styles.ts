import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { smAndUp, mdAndUp } from '../../styles/styles'


export const templateStyles = createStyles({
    posts: {
    },

    postContainer: {
        display: "flex",
        backgroundColor: "rgba(255,255,255,0.5)",
        cursor: "pointer",
        flexWrap: "wrap",
        border: "1px solid #A8A8A8",
        borderRadius: 8,
        "& img": {
            width: "100%",
            borderRadius: "0px 0px 8px 8px"
        },
        "& a": {
            textDecorationLine: "none",
            color: "black",
        },
    }
})