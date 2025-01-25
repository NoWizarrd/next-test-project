"use client"
import { Pagination } from "components/posts/Pagination";
import { Posts } from "components/posts/Posts";
import { useEffect, useState } from "react";
import { Post } from "types/PostType";

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [limit, setLimit] = useState(5); 
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); 

    const fetchPosts = async () => {
        const response = await fetch(
            `${baseUrlPosts}?_limit=${limit}&_page=${page}`,
            {
                cache: 'force-cache',
            },
        );
        const data: Post[] = await response.json();
        const totalCount = parseInt(response.headers.get('X-Total-Count') || '0', 10);
        setTotalPages(Math.ceil(totalCount / limit));
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <div className="flex flex-col justify-center items-center bg-background text-foreground">
            <h1 className="my-5 text-3xl">Страница Постов</h1>
            <ul className="text-xl h-[70vh]">
                <Posts posts={posts}/>
            </ul>
            <div className="flex items-center mt-5">
                <Pagination page={page} totalPages={totalPages} changePage={setPage}/>
            </div>
        </div>
    );
}
