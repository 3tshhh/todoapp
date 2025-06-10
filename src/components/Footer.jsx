import styles from "./footer.module.css";
export default function Footer({ completedTasks, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed tasks : {completedTasks}</span>
      {/* <br /> */}
      <span className={styles.item}>Total todos : {totalTodos}</span>
    </div>
  );
}
