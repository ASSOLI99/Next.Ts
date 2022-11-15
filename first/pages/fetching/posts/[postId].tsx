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
        <Link href={"/"}>GO HOME</Link>
      </p>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
      { params: { postId: "4" } },
    ],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params as IParams;
  console.log(postId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};
export default SinglePost;
