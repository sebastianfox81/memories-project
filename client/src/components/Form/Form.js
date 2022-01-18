import React, { useState, useEffect } from "react";
// import axios from 'axios';
import useStyles from "./styles";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = ({ addPost, posts, currentId, setCurrentId, updatePost }) => {
  const [ postData, setPostData ] = useState({
    creator: '',
    title: '',
    msg: '',
    tags: '',
    selectedFile: ''
  })

  let post;
  if (currentId) {
    post = posts.find((p) => p._id === currentId)
  }

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])


  const classes = useStyles();

  const handleChange = (e) => {
    setPostData({
      ...postData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      updatePost(currentId, postData)
    } else {
      addPost(postData)
    }
    clear();
  }

  const clear = () => {
      setCurrentId(null);
      setPostData({
      creator: '',
      title: '',
      msg: '',
      tags: '',
      selectedFile: ''
    })
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
        <Typography variant="h6">{currentId ? 'Edit' : 'Create'} Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleChange} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleChange} />
        <TextField name="msg" variant="outlined" label="Message" fullWidth value={postData.msg} onChange={handleChange} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={handleChange} />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64})}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          fullWidth>
            Submit
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={clear}
          fullWidth>
            Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;




