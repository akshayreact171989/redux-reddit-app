import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { smAndUp, mdAndUp, lgAndUp } from '../../styles/styles'
import { imageContainerLoading } from '../../styles/common-animation'

export const templateStyles = createStyles({
    '@global': {
        "@keyframes imageContainerLoading": {
            ...imageContainerLoading
        }
    },
    posts: {
        marginTop: 4,
        [mdAndUp()]: {
            marginTop: 16,
        },
    },
    posts__gridItem: {
        padding: "8px 4px !important",
        [mdAndUp()]: {
            padding: "8px !important",
        },
        [lgAndUp()]: {
            padding: "12px !important",
        },
    },
    postContainer: {
        display: "flex",
        position: "relative",
        alignContent: "center",
        boxShadow: "0 0 4px #ffffff85",
        backgroundColor: "rgba(255,255,255,0.8)",
        border: "0.5px solid white",
        cursor: "pointer",
        flexWrap: "wrap",
        textAlign: "center",
        "color": "black",
        borderRadius: 8,
        transition: "all .1s ease-in-out",
        "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0px 0px 6px white"
        },
        "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "8px 0px 0px 8px"
        },
    },
    postContainer__imgAnimation: {
        "animation": "imageContainerLoading 2s ease-in-out infinite",
        borderRadius: "8px 0px 0px 8px",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "zIndex": 1
    },
    postContainer__img: {
        "zIndex": 10
    },
    post__heading: {
        fontSize: 16,
        width: "100%",
        fontFamily: "'Open Sans', sans-serif",
        padding: 16,
        textAlign: "center",
        margin: "0 !important",
        [mdAndUp()]: {
            fontSize: 18,
        },
        [lgAndUp()]: {
            fontSize: 20,
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
        margin: 0,
    }

})