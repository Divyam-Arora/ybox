import React, { Suspense } from "react";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { getPosts } from "./store";

const NewPost = React.lazy(() => import("./pages/NewPost"));
const AllPosts = React.lazy(() => import("./pages/AllPosts"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  });
  return (
    <Layout>
      <Suspense fallback={<div className="centered">{<LoadingSpinner />}</div>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts" exact>
            <AllPosts />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
