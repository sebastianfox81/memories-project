import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { getPosts } from './actions/posts';
import memories from './images/img1.png';
import useStyles from './styles';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';

const App = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [ posts, setPosts ] = useState([]);
  const [ currentId, setCurrentId ] = useState(null)

  useEffect(() => {
    getAllPosts();
  }, [])

  const addPost = (post) => {
    axios.post('http://localhost:5000/api/posts', post)
    .then(res => getAllPosts(), console.log(post))
    .catch(err => console.log(err))
  }

  const updatePost = (id, updatedPost) => {
    axios.put('http://localhost:5000/api/posts/' + id, updatedPost)
    .then(res => getAllPosts())
    .catch(err => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete('http://localhost:5000/api/posts/' + id)
    .then(res => getAllPosts())
    .catch(err => console.log(err));

  }


const getAllPosts = () => {
  axios.get('http://localhost:5000/api/posts')
  .then(res => setPosts(res.data))
  .catch(err => console.log(err))
}

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts posts={posts} deletePost={deletePost} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form
                addPost={addPost}
                updatePost={updatePost}
                currentId={currentId}
                setCurrentId={setCurrentId}
                posts={posts}
                />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;