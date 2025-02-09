"use client"
import { Pagination } from "components/posts/Pagination";
import { Posts } from "components/posts/Posts";
import { useEffect, useState } from "react";
import { Post } from "types/PostType";

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);
    const limit = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(baseUrlPosts, { cache: 'force-cache' });
            const data: Post[] = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const totalPages = Math.ceil(posts.length / limit);
    const displayedPosts = posts.slice((page - 1) * limit, page * limit);

    return (
        <div className="flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="my-5 text-3xl max-sm:text-xl">Страница Постов</h1>
            <div className="items-center justify-center py-4 max-sm:text-sm">
                <Pagination page={page} totalPages={totalPages} changePage={setPage}/>
            </div>
            <ul className="text-xl max-lg:text-base">
                <Posts posts={displayedPosts}/>
            </ul>
        </div>
    );
}