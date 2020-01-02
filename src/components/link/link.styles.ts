import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'

const linkObj: CSSProperties = {
}

export const linkStyles = createStyles({
    link: {
        textDecoration: "none",
        padding: 8,
        borderRadius: 4,
    },
    linkSelected: {
        backgroundColor: "#f1ff5d",
        color: "white !important",
        padding: 8,
        borderRadius: 4,
    },
    linkContainer: {
        textDecoration: "none"

    }
})