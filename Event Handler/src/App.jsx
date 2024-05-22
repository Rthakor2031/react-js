import React, { useEffect, useState } from 'react';
import Post from './Components/Post';

const App = () => {
  let [posts, setPosts] = useState([]);
  let [load , setload] = useState(false)

  const fetchdata = () => {
    setload(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setload(false);
      })
      .catch((err) => {
        alert('Error Found......');
        setload(false);
      });
  };

  return (load? <h1 style={{textAlign:"center" , color:"Red"}}>LoaDinG...........</h1> : <div className="App">
      <button onClick={fetchdata} style={{display:"block" , margin:"auto"}}>GET POSTS</button>
      <div className="container">
        {posts.map((el) => (
          <Post key={el.id} title={el.title} body={el.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
