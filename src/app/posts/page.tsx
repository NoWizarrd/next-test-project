"use client"
import { useEffect, useState } from "react";
import { Post } from "types/PostType";

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts'

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const response: Post[] = await fetch(
            baseUrlPosts, 
            { cache: 'force-cache' })
        .then(res => res.json())

        setPosts(response)
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-5 text-2xl">Страница Постов</h1>
            <ul>
                {posts.map((post)=> (
                    <li key={post.id} className="border-2 border-sky-300 m-4 p-2 max-w-lg">
                        <div>
                            Title: {post.title}
                        </div>
                        <div>
                            Body: {post.body}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}