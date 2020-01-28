import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { templateStyles } from './Posts.styles'
import { Grid } from '../grid/grid'
import { capitalize } from 'lodash'

// export const firstLetterCapital = (text: string) => (text && (text = text.trim()) && text.length > 0) ? (text[0].toLocaleUpperCase() + text.substr(1).toLocaleLowerCase()) : ""
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
            {posts.map((post, i) => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={3} className={classes.posts__gridItem}>
                    <Grid container spacing={0} className={classes.postContainer} onClick={() => window.open(post.url, "_blank")}>
                        <Grid item xs={4} className={classes.postContainer__img}>
                            <img src={`https://source.unsplash.com/200x200/?${post.title}`}></img>
                        </Grid>
                        <Grid item xs={4} className={classes.postContainer__imgAnimation} >
                        </Grid>
                        <Grid item xs={8} className={classes.post__heading}>
                            <div key={i} style={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}><p className={classes.post__headingText}>{capitalize(post.title)}</p></div>
                        </Grid>
                    </Grid>
                </Grid>
            ))
            }
        </Grid>
    }
}

export const Posts = withStyles(templateStyles)(Component)