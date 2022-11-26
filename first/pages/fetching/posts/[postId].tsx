import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
interface IParams extends ParsedUrlQuery {
  slug: string;
}
const SinglePost: React.FC<{ post: any }> = (props) => {
  return (
    <div>
      <p>
        <Link href={"/"}>GO Home</Link>
      </p>
      <p>
        <Link href={"./"}>GO Back</Link>
      </p>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const data: Response[] = await response.json();
  const paths = data.map((post: any) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params as IParams;
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data: Response[] = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
export default SinglePost;
