import { useState } from "react";

function EditForm({todo, editTodo}){
const [content, setContent] = useState(todo.content);
  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(todo.id, content)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="還有什麼海水魚類呢..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}
export default EditForm