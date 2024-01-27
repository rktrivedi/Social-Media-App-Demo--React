import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");

    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <form className="submit">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="Text"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Title
        </label>
        <input
          ref={postTitleElement}
          type="Text"
          className="form-control"
          id="title"
          placeholder="Enter Title For Post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          className="form-control"
          id="body"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reaction
        </label>
        <input
          type="Text"
          ref={reactionsElement}
          className="form-control"
          id="title"
          placeholder="Number of People Reacted on Post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="Text"
          ref={tagsElement}
          className="form-control"
          id="title"
          placeholder="Enter Your Tags"
        />
      </div>
      <button onClick={handleSubmit} type="button" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
