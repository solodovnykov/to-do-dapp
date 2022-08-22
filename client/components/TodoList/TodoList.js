import Task from "../Task/task";
import styles from "./todoList.module.scss";

const TodoList = () => {
  return (
    <div className="container">
      <div className={styles.todoList}>
        <form>
          <div className={styles.textFieldWrapper}>
            <input
              placeholder="Add task..."
              type="text"
              className={styles.textField}
            />
            <button className={styles.addButton}>Add</button>
          </div>
        </form>

        <ul className={styles.taskList}>
          <Task />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
