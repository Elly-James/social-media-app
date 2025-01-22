import React from "react"
import Post from "./Posts";
import Header from "./Header";
import Profile from "./Profile";
import Comments from "./Comments";



function App() {
  return (
    <div>
        <Header/>
      
      <Profile/>
      <h1>My Posts</h1>
      <Post/>
      <Comments/>
    </div>
  );
}

export default App