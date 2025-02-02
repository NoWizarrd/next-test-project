import React, { ReactNode } from 'react'
import { Todo } from 'types/TodoType'

interface TodosProps {
    todos: Todo[],
    removeTodo: (id: number) => void,
    click: (id: number) => void
}

export default function Todos (props: TodosProps): ReactNode {

    const {todos, removeTodo, click} = props

    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id}
                className="
                flex relative flex-col min-w-[350px]
                border-2 border-[var(--borderColor)] dark:bg-[var(--darkGray)] m-4 p-3">
                    <div className='mr-10'>
                        Title: {todo.title}
                    </div>
                    <div>
                        Completed: {String(todo.completed)}
                    </div>
                    <button onClick={() => removeTodo((todo.id))} className='absolute top-0 right-1 hover:text-blue-500 dark:hover:text-gray-500'>X</button>
                    <button onClick={() => click((todo.id))} className='absolute bottom-0 right-1 hover:text-blue-500 dark:hover:text-gray-500'>
                        {!todo.completed ? 'Выполнить' : 'Отложить'}
                    </button>
                </li>
            ))}
        </>
    )
}
