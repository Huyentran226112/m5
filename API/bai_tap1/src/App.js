import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
// khoi tao api 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);
// xu li input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
//  xu li hanh dong submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // 
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: inputValue,
      completed: false,
    })
      .then(response => {
        alert(`Status: ${response.status}`);
        setTodos([...todos, response.data]);
        setInputValue('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo task:</label>
        <input id="todoInput" type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;