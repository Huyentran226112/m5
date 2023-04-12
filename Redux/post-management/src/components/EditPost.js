
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editPost } from "../redux/actions";
import axios from "axios";

const EditPost = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title: title,
      body: content,
      userId: 1,
      id: props.match.params.id,
    };
    dispatch(editPost(postData));
    history.push("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <br />
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
