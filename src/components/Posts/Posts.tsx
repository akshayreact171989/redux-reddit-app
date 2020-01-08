import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { templateStyles } from './Posts.styles'
import { Grid } from '../grid/grid'

export interface PostFieldProps {
    title: string
    url: string
    images: []
}
export interface PostsFieldProps {
    posts: PostFieldProps[]
}

export interface PostsDispatchProps { }

interface Props extends PostsFieldProps, PostsDispatchProps, WithStyles<typeof templateStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { classes, posts } = this.props
        return <Grid container spacing={16} className={classes.posts}>
            {this.props.posts.map((post, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <div className={classes.postContainer} onClick={() => window.open(post.url, "_blank")}>
                        <h2 key={i} >{post.title}</h2>
                        {/* <img src={getRandomCover()}></img> */}
                        <img src={`https://source.unsplash.com/600x600/?${post.title}`}></img>
                    </div>
                </Grid>
            ))}
        </Grid>
    }
}

export const Posts = withStyles(templateStyles)(Component)