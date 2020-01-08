import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../../actions/actions'
import { Picker } from '../Picker/Picker'
import { Posts } from '../Posts/Posts'

import { templateStyles } from './AsyncApp.styles'
import { Grid } from '../grid/grid'

export interface AsyncAppFieldProps {
    selectedSubreddit: any
    posts: []
    isFetching: boolean
    lastUpdated: number
}

export interface AsyncAppDispatchProps {
    dispatch: any
}

interface Props extends AsyncAppFieldProps, AsyncAppDispatchProps, WithStyles<typeof templateStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
        this.state = {

        }
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    componentDidUpdate(prevProps: any) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }
    handleChange(nextSubreddit: any) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }
    handleRefreshClick(e: any) {
        e.preventDefault()
        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }


    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated, classes } = this.props
        return <Grid container spacing={16} className={classes.asyncApp}>
            <Grid item xs={12} className={classes.headerContainer}><Picker
                value={selectedSubreddit}
                onChange={this.handleChange}
                options={['ReactJS', 'Frontend', 'Reduxjs']}
            />
            </Grid>
            <Grid item xs={12} className={classes.asyncApp__subHeading}>
                {lastUpdated && (
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                    </span>
                )}
                {!isFetching && (
                    <button onClick={this.handleRefreshClick}>Refresh</button>
                )}
            </Grid>
            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
            {posts.length > 0 && (
                <Grid item xs={12} style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts} />
                </Grid>
            )}
        </Grid>
    }
}


export const AsyncApp = withStyles(templateStyles)(Component)

function mapStateToProps(state: any) {
    const { selectedSubreddit, postsBySubreddit, classes } = state
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: []
    }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
        classes
    }
}
export default connect(mapStateToProps)(AsyncApp)