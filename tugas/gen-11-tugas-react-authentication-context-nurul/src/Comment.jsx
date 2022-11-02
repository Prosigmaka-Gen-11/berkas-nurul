import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Comment() {
  const { token } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  function getComments() {
    axios
      .get("https://dummyjson.com/comments", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <h1>Detail Post</h1>
      <Link to="/">Back to Home</Link>

      <ul>
        {comments.map((comment) => (
          <li>
            <p>Comment: {comment.body}</p>
            <p> username: {comment.user.username}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Comment;
