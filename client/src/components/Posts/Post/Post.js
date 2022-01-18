import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon  from '@material-ui/icons/ThumbUpAlt';
import Delete  from '@material-ui/icons/Delete';
import MoreHorizIcon  from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


const Post = ({ post, deletePost, id, setCurrentId }) => {

  const classes = useStyles();




  return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body1">{moment(post.createdAt).from()}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: 'white'}} size="small" onClick={() => setCurrentId(id)}>
              <MoreHorizIcon fontSize="medium"/>
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>

          </div>
          <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
              {post.title}
            </Typography>
          <Typography className={classes.msg}  gutterBottom>
              {post.msg}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" >
              <ThumbUpAltIcon fontSize="small" />
              Like
              {post.likes}
            </Button>
            <Button size="small" color="primary" onClick={() => deletePost(id)}>
              <Delete fontSize="small" />
              Delete
            </Button>
          </CardActions>



      </Card>
  )
}


export default Post;