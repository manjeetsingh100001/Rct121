// import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../redux/todo/action";
import TodoInput from "./todoinput";
import TodoList from "./todoList";

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);
  return (
    <div>
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
}

export default Todo;
