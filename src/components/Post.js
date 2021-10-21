import classes from "./Post.module.css";

const Post = function (props) {
  const mediaEl =
    props.el.media_type === "video" ? (
      <iframe title={props.el.title} src={props.el.url}></iframe>
    ) : (
      <img src={props.el.url} alt={props.el.title}></img>
    );

  const humanDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <li className={classes.list_el}>
      <h4>{`@ ${props.el.owner ?? "anonymous"}`}</h4>
      <figure>{mediaEl}</figure>

      <div className={classes.content}>
        <h2>{props.el.title}</h2>
        <p>{props.el.description}</p>
        <p>{humanDate(props.el.date)}</p>
      </div>
    </li>
  );
};

export default Post;
