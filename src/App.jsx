import { useState, useReducer } from "react";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { todosReducer } from "./reducer/appReducer";
import styles from "./App.module.css";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, dispatch] = useReducer(todosReducer, [
    { name: "Pobiegac", done: false, id: 1 },
    { name: "Wyrzucic smieci", done: false, id: 2 },
  ]);

  function AddItem(newTodoName) {
    dispatch({ type: "add", newTodoName });
    setIsFormShown(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Do zrobiena</h1>
        <h2>{getSubheading(todos.length)}</h2>
        {!isFormShown && (
          <button
            className={styles.button}
            onClick={() => setIsFormShown(true)}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => AddItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => {
              dispatch({ type: "delete", id });
            }}
            onDoneButtonClick={() => {
              dispatch({ type: "finish", id });
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
import { useState } from "react";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import styles from "./App.module.css";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, setTodos] = useState([
    { name: "Zaplacic rachunki", done: false, id: 1 },
    { name: "Wyrzucic smieci", done: false, id: 2 },
  ]);

  function AddItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodoName,
        done: false,
        id: prevTodos.at(-1).id + 1,
      },
    ]);
    setIsFormShown(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Do zrobiena</h1>
        <h2>{getSubheading(todos.length)}</h2>
        {!isFormShown && (
          <button
            className={styles.button}
            onClick={() => setIsFormShown(true)}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => AddItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => {
              setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.id !== id)
              );
            }}
            onDoneButtonClick={() => {
              setTodos((prevTodos) =>
                prevTodos.map((todo) => {
                  if (todo.id !== id) {
                    return todo;
                  }
                  return {
                    ...todo,
                    done: true,
                  };
                })
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
