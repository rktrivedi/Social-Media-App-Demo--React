import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {};

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostlist, action) => {
  return currPostlist;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going for Annual Meeting @ Google",
    body: "Hello Friends i am visiting AGM @ Google India",
    reaction: 2,
    userId: "user_8",
    tags: ["vacation", "GOa", "PartyTime"],
  },
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
