import React from "react";
import { useState } from "react";

function TodoFun(props) {
  // khai bao sates
  // editId: -1,
  // todo: null,
  // todos: []
  const [editId, setEditId] = useState(-1);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // khai bao cac pt xu li

  const handleSetTodo = (value) => {
    setTodo(value);
  };
  const addTodo = () => {
    console.log(todo);
    let cr_todos = todos;
    cr_todos.push(todo);
    // them vao todos
    setTodos(cr_todos);
    // lam rong
    setTodo("");
  };
  const editTodo = (id) => {
    let todo = todos[id];

    setEditId(id);

    // Dua gia tri vao o input
    setTodo(todo);
  };
  // const deleteTodo = (id) => {
  //   // let cr_todos = todos;
  //   // cr_todos.splice(id, 1);
  //   // console.log(cr_todos);
  //   // setTodos(cr_todos);

  //   // setTodo("");
  //   // }
  // };

  const deleteTodo = (id) => {
    let updatedTodos = [...todos]; // tạo một bản sao mới của danh sách todos
    updatedTodos.splice(id, 1); // xóa todo tại vị trí id
    setTodos(updatedTodos); // cập nhật danh sách todos
  }
  
  const updateTodo = () => {
    const id = editId;
    //Cap nhat mang cr_todos
    let cr_todos = todos;
    cr_todos[id] = todo;
    // thiet lap gia tri todos
    setTodos(cr_todos);

    // Lam rong todo
    setTodo("");

    // Set editId
    setEditId(-1);
  };
  const addButton = <button onClick={() => addTodo()}> add </button>;
  const updateButton = <button onClick={() => updateTodo()}> edit </button>;
  return (
    <div>
      <h1>{todo}</h1>
      <input
        type={"text"}
        onChange={(e) => handleSetTodo(e.target.value)}
        value={todo}
      />
      {/* <button onClick={() => addTodo()}> add </button> */}
      {editId === -1 ? addButton : updateButton}
      <table>
        <thead>
          <tr>
            <th> Ten nhiem vu </th>
            <th> Hanh dong </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, key) => (
            <tr key={key}>
              <td>{todo}</td>
              <td>
                <button onClick={() => editTodo(key)}> Edit </button>
                {/* <button onClick={() => deleteTodo(key)}> Delete </button> */}
                <button onClick={() => deleteTodo(key)}> Delete </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoFun;
