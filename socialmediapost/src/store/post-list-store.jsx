import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {};

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addAllPosts: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(
      `${userId} post ${postTitle} body ${postBody} and${reactions} and${tags}`
    );

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addAllPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    console.log(`Delete Post having Id ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addAllPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
