import { useSelector } from "react-redux";

import Posts from "../components/Posts";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllPosts = function (props) {
  const userPosts = useSelector((state) => state["user-posts"]);
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  return (
    <>
      <Posts list={[...userPosts, ...posts]} />
      {status !== "success" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default AllPosts;
