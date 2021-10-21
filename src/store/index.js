import { createSlice, configureStore } from "@reduxjs/toolkit";
import { APOD_API, APOD_API_KEY } from "../util/api";
import newDate from "../util/newDate";

const initialPostState = [];

const userPostSlice = createSlice({
  name: "user-posts",
  initialState: initialPostState,
  reducers: {
    addPost: (state, actions) => {
      state.push(actions.payload);
    },
  },
});

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], status: null },
  reducers: {
    addPost: (state, actions) => {
      state.posts.push(...actions.payload);
    },
    setStatus: (state, actions) => {
      state.status = actions.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    "user-posts": userPostSlice.reducer,
  },
});

export const userPostActions = userPostSlice.actions;
export const postActions = postSlice.actions;

export const getPosts = function () {
  return async (dispatch) => {
    dispatch(postActions.setStatus("pending"));
    const endDate = newDate(new Date(), 0);
    const startDate = newDate(new Date(), 10);
    const fetchData = async () => {
      const response = await fetch(
        `${APOD_API}${APOD_API_KEY}&start_date=${startDate}&end_date=${endDate}`
      );
      if (!response.ok) {
        throw Error("Posts were not loaded");
      }
      let data = await response.json();

      data.reverse();
      data = data.map((post) => {
        return {
          owner: post.copyright,
          date: post.date,
          description: post.explanation,
          title: post.title,
          url: post.url,
          media_type: post.media_type,
        };
      });

      dispatch(postActions.addPost(data));
      dispatch(postActions.setStatus("success"));
      console.log(data);
    };

    await fetchData().catch((error) => {
      console.log(error);
      dispatch(postActions.setStatus("error"));
    });
  };
};

export default store;
