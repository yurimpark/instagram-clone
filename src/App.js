import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      {/* 헤더 */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="../dotorigram_logo.png"
          alt="logo"
        ></img>
      </div>
      <h1>인스타그램 클론 with React</h1>
      {/* 포스트 */}

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
