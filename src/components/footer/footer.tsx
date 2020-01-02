import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'
import { FilterLinkContainer } from '../../containers/filterLink'
import { VisibilityFilters } from '../../actions'

import { footerStyles } from './footer.styles'

export interface FooterFieldProps { }

export interface FooterDispatchProps { }

interface Props extends FooterFieldProps, FooterDispatchProps, WithStyles<typeof footerStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { classes } = this.props
        return <div className={classes.footer}>
            <h2 style={{ textAlign: "center" }}>Show</h2>
            <div className={classes.filter__mainContainer}><div className={classes.filter__filterContainer}>
                <FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>
                    All
            </FilterLinkContainer>
            </div>
                <div className={classes.filter__filterContainer}>
                    <FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
                        Active
            </FilterLinkContainer></div>
                <div className={classes.filter__filterContainer}>
                    <FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
                        Completed
            </FilterLinkContainer></div>
            </div>
        </div>
    }
}

export const FooterComponent = withStyles(footerStyles)(Component)