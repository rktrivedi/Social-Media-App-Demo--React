import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMSg";

const PostList = () => {
  const { postList, addAllPosts } = useContext(PostListData);

  const fetchPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      
      .then((data) => {
        addAllPosts(data.posts)
        console.log(data);
      })
      
  };

  // const fetchPost = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data); // Log the entire data object for debugging
  //       addAllPosts(data.posts);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  return (
    <>
      {postList.length == 0 && <WelcomeMsg fetchPost={fetchPost} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
