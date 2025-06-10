import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((i) => i !== item));
  }
  function handleClick(item) {
    item.done = !item.done;
    setTodos(todos.map((todo) => (todo.name === item.name ? item : todo)));
  }
  const className = `${styles.itemName} ${item.done ? styles.completed : ""}`;
  return (
    <div className={styles.item}>
      <div className={styles.itemBar}>
        <span className={className} onClick={() => handleClick(item)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
