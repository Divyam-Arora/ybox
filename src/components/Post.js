import classes from "./Post.module.css";

const Post = function (props) {
  const mediaEl =
    props.el.media_type === "video" ? (
      <iframe title={props.el.title} src={props.el.url}></iframe>
    ) : (
      <img src={props.el.url} alt={props.el.title}></img>
    );
  return (
    <li className={classes.list_el}>
      <h4>{`@ ${props.el.owner ?? "anonymous"}`}</h4>
      <figure>{mediaEl}</figure>

      <div className={classes.content}>
        <h2>{props.el.title}</h2>
        <p>{props.el.description}</p>
        <p>{props.el.date}</p>
      </div>
    </li>
  );
};

export default Post;
