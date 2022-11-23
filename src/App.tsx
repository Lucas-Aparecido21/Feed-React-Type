import React from "react";
import "./global.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./App.modules.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://www.w3schools.com/howto/img_avatar.png",
      name: "Douglas",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Teste 123" },
      { type: "paragraph", content: "Teste 321" },
      { type: "link", content: "#teste1" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Daniel",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: 'teste teste teste' },
      { type: "paragraph", content: 'teste teste teste' },
      { type: "link", content: "#teste2" },

    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post 
             key={post.id}
             author={post.author}
             publishedAt={post.publishedAt} 
             content={post.content}/> 
          })}
        </main>
      </div>
    </div>
  );
}
