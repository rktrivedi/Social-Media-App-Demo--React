const WelcomeMsg = ({ fetchPost }) => {
  return (
    <>
      <div className="welcome">
        <h4 className="heading">There is no Post</h4>
        <button
          onClick={fetchPost}
          type="button"
          className="btn btn-primary btn-lg fetchbtn"
        >
          Large button
        </button>
      </div>
    </>
  );
};

export default WelcomeMsg;
