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
        <div className="flex flex-col  justify-center items-center bg-background text-foreground">
            <h1 className="my-5 text-3xl">Страница задач</h1>
            <ul className="text-xl">
                {todos.map((todo)=> (
                    <li key={todo.id} className="border-2 border-[var(--borderColor)] dark:bg-[var(--darkGray)] m-4 p-2">
                        <div>
                            Title: {todo.title}
                        </div>
                        <div>
                            Completed: {String(todo.completed)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}