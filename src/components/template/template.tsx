import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { templateStyles } from './template.styles'

export interface TemplateFieldProps { }

export interface TemplateDispatchProps { }

interface Props extends TemplateFieldProps, TemplateDispatchProps, WithStyles<typeof templateStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { classes } = this.props
        return <div></div>
    }
}

export const Template = withStyles(templateStyles)(Component)