import Post from "./Post";
import Card from "./UI/Card";

import classes from "./Posts.module.css";

const Posts = function (props) {
  const posts = props.list.map((el) => {
    return <Post key={el.date} el={el} />;
  });
  return (
    <>
      <Card>
        <ul className={classes.list}>{posts}</ul>
      </Card>
    </>
  );
};

export default Posts;
