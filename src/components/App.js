import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogLogo from "../assets/logo"; // Assuming you have an image for the blog logo
import { posts } from "../data/blog";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Your Blog Name"/>
      <About image={blogLogo} about="A blog about learning React"/>
      <ArticleList posts={posts}/>
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App;



