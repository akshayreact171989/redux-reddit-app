import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { linkStyles } from './link.styles'

export interface LinkFieldProps {
    active: boolean,
    children: React.ReactNode,
}

export interface LinkDispatchProps {
    onClick: () => {}

}

interface Props extends LinkFieldProps, LinkDispatchProps, WithStyles<typeof linkStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { classes, active, children, onClick } = this.props
        return (
            <div className={active ? classes.linkSelected : classes.link}
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}>
                <a
                    href=""

                    className={classes.linkContainer}
                >
                    {children}
                </a></div>
        )
    }
}

export const LinkComponent = withStyles(linkStyles)(Component)