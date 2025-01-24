"use client"
import { useEffect, useState } from "react";
import { Todo } from "types/TodoType";

const baseUrlTodos = 'https://jsonplaceholder.typicode.com/todos'

export default function TodosPage() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const response: Todo[] = await fetch(
            baseUrlTodos, 
            { cache: 'force-cache' })
        .then(res => res.json())

        setTodos(response)
    }

    useEffect(() => {
        fetchTodos()
    }, []);

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-5 text-3xl">Страница задач</h1>
            <ul className="text-xl">
                {todos.map((todo)=> (
                    <li key={todo.id} className="border-2 border-sky-300 m-4 p-2">
                        <div>
                            Title: {todo.title}
                        </div>
                        <div>
                            Complited: {String(todo.completed)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}