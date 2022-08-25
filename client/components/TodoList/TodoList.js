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

        <div className={styles.taskListWrapper}>
          <ul className={styles.taskList}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
