import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../Redux/todos/action";

function TodoInput() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  // will come back and finish this towards the later part of class
  const handleAddTodo = () => {
    dispatch(
      addTodos({
        title: text
      })
    ).then(() => {
      dispatch(getTodos());
    });
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add a task"
      />
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}
export default TodoInput;
