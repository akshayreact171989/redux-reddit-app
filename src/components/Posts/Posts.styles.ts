import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { smAndUp, mdAndUp } from '../../styles/styles'


export const templateStyles = createStyles({
    posts: {
        marginTop: 4,
        [mdAndUp()]: {
            marginTop: 16,
        },
    },
    postContainer: {
        display: "flex",
        alignContent: "center",
        boxShadow: "0 0 4px #ffffff85",
        backgroundColor: "rgba(255,255,255,0.8)",
        // border: "0.5px solid white",
        cursor: "pointer",
        flexWrap: "wrap",
        textAlign: "center",
        "color": "black",
        borderRadius: 8,
        "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "8px 0px 0px 8px"
        },
    },
    post__heading: {
        fontSize: 16,
        width: "100%",

        padding: 8,
        textAlign: "center",
        margin: "0 !important",
        [mdAndUp()]: {
            fontSize: 18,
        },
    },
    post__headingText: {
        "color": "black !important",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "display": "-webkit-box",
        "WebkitLineClamp": 3,
        "WebkitBoxOrient": "vertical",
        lineHeight: 1.5,
    }

})