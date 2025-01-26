"use client"
import { Posts } from "components/posts/Posts";
import React, { use } from "react";
import { ReactNode, useEffect, useState } from "react";
import { Post } from "types/PostType";

export default function UserProfile({params}: {
    params: Promise<{id: string}>
}): ReactNode {
    const [posts, setPosts] = useState<Post[]>([]);
    const { id } = use(params);
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const fetchUserPosts = async () => {
        const response = await fetch(url)
        const AllPosts: Post[] = await response.json()
        const userPosts =  AllPosts.filter(post => post.userId === Number(id))
        setPosts(userPosts)
    }

    useEffect(() => {
        fetchUserPosts()
    }, []);

    return(
        <div className="flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="text-3xl my-5">Посты пользователя с id: {id}</h1>
            <ul className="text-lg max-lg:text-base">
                <Posts posts={posts}/>
            </ul>
        </div>

    )
}