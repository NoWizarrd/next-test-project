import { ReactNode } from "react";
import { Post } from "types/PostType";

interface PostsProps {
    posts: Post[]
}

export function Posts({posts}: PostsProps): ReactNode {
    return(
        <>
            {posts.map((post) => (
                <li key={post.id} className="border-2 border-[var(--borderColor)] dark:bg-[var(--darkGray)]
                m-4 p-2 max-w-4xl ">
                    <div>
                        <strong>ID:</strong> {post.id} <strong>Title:</strong> {post.title}
                    </div>
                    <div>
                        <strong>Body:</strong> {post.body}
                    </div>
                </li>
            ))}
        </>
    )
}