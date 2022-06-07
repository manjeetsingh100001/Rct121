import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);

  return (
    <div>
      <h3>Todos</h3>
      {loading && <div>loading</div>}
      {todos.map((item) => (
        <div key={item.id}>
          {item.id} -{item.title} - {`${item.status}`}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
