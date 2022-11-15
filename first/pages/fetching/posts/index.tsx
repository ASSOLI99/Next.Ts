import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

const Posts: React.FC<{ posts: Response[] }> = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {props.posts.map((post: any, i: number) => {
          if (i >= 3) {
            return;
          }
          return (
            <li key={i}>
              <Link href={`posts/${post.id}`}> {post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data: Response[] = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
export default Posts;
