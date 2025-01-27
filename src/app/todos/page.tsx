"use client";
import Todos from "components/todos/Todos";
import { useEffect, useState } from "react";
import { Todo } from "types/TodoType";

const baseUrlTodos = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTask, setInputTask] = useState("");

  const fetchTodos = async () => {
    const response: Todo[] = await fetch(baseUrlTodos, { cache: "force-cache" })
      .then((res) => res.json());
    setTodos(response);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = () => {
    if (inputTask.trim()) {
      const newTodo: Todo = {
        id: Math.random() * (100 - 10) + 10, 
        title: inputTask,
        completed: false,
        userId: 1,
      };
      setTodos([newTodo, ...todos]); 
      setInputTask(""); 
    }
  };

  const removeTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const changeCompleted = (todoId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  
  return (
    <div className="flex flex-col justify-center items-center bg-background text-foreground p-5">
      <h1 className="my-5 text-3xl max-sm:text-xl">Страница задач</h1>
      <div className="flex items-center gap-2 mb-5">
        <input
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Введите задачу..."
          className="
            px-4 py-2 border rounded-lg
            bg-white text-black dark:bg-gray-800 dark:text-white
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            border-gray-300 dark:border-gray-600 max-[540px]:text-sm
          "
        />
        <button
          onClick={addTodo}
          className="
            px-4 py-2 bg-blue-500 dark:bg-gray-700 
            text-white dark:text-[#d1d5db] rounded-lg hover:bg-blue-600 dark:hover:bg-gray-600
            transition-colors duration-200 max-[540px]:text-sm
          "
        >
          Добавить задачу
        </button>
      </div>
      <ul className="text-xl">
        { todos.length ? <Todos click={changeCompleted} removeTodo={removeTodo} todos={todos} /> : <p>Нет задач</p>}
      </ul>
    </div>
  );
}
