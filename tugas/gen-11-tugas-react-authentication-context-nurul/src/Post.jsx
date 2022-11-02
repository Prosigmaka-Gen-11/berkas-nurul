import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Post() {
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  function getPosts() {
    axios
      .get("https://dummyjson.com/posts", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Detail Post</h1>
      <Link to="/">Back to Home</Link>

      <ul>
        {posts.map((post) => (
          <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;
