import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'

function Blog() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    const res = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let arr = await response.json();
      
      setTodos(arr.slice(0, 10)); 
    };
    
    res();
  }, [])
  

  return (
    <div>
      <h1>Blog Tasks</h1>
            
      
  
      <ul>
        {todos.map((item) => (
              
          <li key={item.id}>
            <Link to={`/blog/${item.id}`}>move to this id</Link>
            {item.userid},{item.title}{item.id}{item.compleated}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
