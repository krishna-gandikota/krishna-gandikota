import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log("Error data:", error);
    }
  };


  const addPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
         
          body: JSON.stringify(newPost)
        }
      );
      const data = await response.json();
      setNewPost({ title: "", body: "" });
    } catch (error) {
      console.log("Error adding post:", error);
    }
  };


  const updatePost = async (postId:any) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PUT",
        
          body: JSON.stringify(newPost)
        }
      );
      const data = await response.json();
      setData((prevData:any) =>
        prevData.map((item:any) => (item.id === postId ? data : item))
        
      );
      
      setNewPost({ title: "", body: "" });
    } catch (error) {
      console.log("Error post:", error);
    }
  };


  const deletePost = async (postId:any) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
      });
      setData((prevData) => prevData.filter((post:any) => post.id !== postId));
    } catch (error) {
      console.log("error delete post:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Api</h1>
      <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      <div> 
        <h1>Posts</h1>
        {data.map((post:any) => (
          <div key={post.id}>
            <h3 className="text-[25px] text-gray-700 ">{post.title}</h3>
            <p>{post.body}</p>
            <button className="border-2 border-solid bg-blue-500 text-white p-2" onClick={() => updatePost(post.id)}>Update</button>
            <button className="border-2 border-solid bg-slate-500 text-white p-2" onClick={() => deletePost(post.id)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
