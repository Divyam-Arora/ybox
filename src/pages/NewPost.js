import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { userPostActions } from "../store";
import PostForm from "../components/PostForm";

let isFirst = true;
const NewPost = function (props) {
  const [status, setStatus] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state["user-posts"]);
  useEffect(() => {
    if (status) {
      history.push("/posts");
    }

    return function cleanup() {
      isFirst = true;
    };
  }, [status, history]);

  useEffect(() => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    console.log(userPosts);

    setStatus(true);
  }, [userPosts, setStatus]);

  const addPostHandler = (post) => {
    dispatch(userPostActions.addPost(post));
    console.log(post);
  };
  return <PostForm onAddPost={addPostHandler} />;
};

export default NewPost;
