import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../redux/actions/postActions";

const AddPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body: content })).then(() => {
      alert("Post added successfully!");
      history.push("/");
    });
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPost;
