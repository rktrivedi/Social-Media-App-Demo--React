import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postlist } = useContext(PostListData);
  console.log(postlist)
  return (
    <>
      {postlist.map((post) => (
        <Post />
      ))}
    </>
  );
};
export default PostList;
