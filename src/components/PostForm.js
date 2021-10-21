import { useRef } from "react";

import Card from "./UI/Card";

import classes from "./PostForm.module.css";

const PostForm = function (props) {
  const authorInputRef = useRef();
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const descInputRef = useRef();
  const mediaTypeInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredMediaType = mediaTypeInputRef.current.value;

    // optional: Could validate here

    props.onAddPost({
      author: enteredAuthor,
      title: enteredTitle,
      url: enteredUrl,
      media_type: enteredMediaType,
      description: enteredDesc,
      date: new Date().toLocaleDateString(),
    });
  }

  return (
    <>
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" required ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required ref={titleInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="url">Media URL</label>
            <input type="url" id="url" required ref={urlInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="media-type">Media type</label>
            <select name="media-type" id="media-type" ref={mediaTypeInputRef}>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="desc">Description</label>
            <textarea id="desc" rows="5" required ref={descInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Post</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default PostForm;
