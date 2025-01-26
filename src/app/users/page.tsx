"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "types/UserType";

const baseUrlUsers = 'https://jsonplaceholder.typicode.com/users'

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const router = useRouter()
    const fetchUsers = async () => {
        const response: User[] = await fetch(
            baseUrlUsers,
            {cache: 'force-cache'}
        ).then(response => response.json())

        setUsers(response)
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return(
        <div className="flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="my-5 text-3xl">Страница пользователей</h1>
            <ul className="grid grid-cols-4 text-xl max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {users.map((user) => (
                    <Link key={user.id} href={`/users/${user.id}`}>
                        <li
                            className="
                            border-2 border-[var(--borderColor)] dark:bg-[var(--darkGray)] m-4 p-2 
                            duration-300 ease-in-out hover:-translate-y-2
                            hover:cursor-pointer h-20 max-[1340px]:h-28 
                            ">
                            <div>
                                Name: {user.name}
                            </div>
                            <div>
                                Username: {user.username}
                            </div> 
                        </li>
                    </Link>
                ))
                }
            </ul>
        </div>
    )
}