"use client"
import { useEffect, useState } from "react";
import { User } from "types/UserType";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const response: User[] = await fetch(
            'https://jsonplaceholder.typicode.com/users',
            {cache: 'force-cache'}
        ).then(response => response.json())

        setUsers(response)
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-5 text-2xl">Страница пользователей</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="border-2 border-sky-300 m-4 p-2">
                        <div>
                            Name: {user.name}
                        </div>
                        <div>
                            Username: {user.username}
                        </div> 
                    </li>
                ))
                }
            </ul>
        </div>
    )
}