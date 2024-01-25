import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {};

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    console.log(
      `${userId} post ${postTitle} body ${postBody} and${reaction} and${tags}`
    );

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "2",
    title: "Attending Workshop @IIT Patna",
    body: "Hello Friends i am going to attend seminaar on IOT @ IIT Patna",
    reaction: 8,
    userId: "user_10",
    tags: ["Seminaar", "GOa", "PartyTime"],
  },
];

export default PostListProvider;
