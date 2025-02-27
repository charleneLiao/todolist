import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function DoWrap() {
  // 陣列加入key值 以避免錯誤
  const [todos, setTodos] = useState([
    {
      content: "藍紋小丑魚",
      id: Math.random(),
      isCompleted: true,
      isEditing: false,
    },
    {
      content: "澳洲神仙魚",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);
  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(), isEditing: false }]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
      return todo.id === id 
      ? {...todo, content: newContent, isEditing : false} : todo
    }));
  };

  return (
    <div className="Wrap">
      <h1>海水魚圖鑑</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default DoWrap;
