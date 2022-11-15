import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const prooductButtonHandler = () => {
    router.push("/products");
  };
  const postsButtonHandler = () => {
    router.push("/fetching/posts");
  };
  return (
    <div>
      <h1>index page</h1>
      <p>
        <button onClick={prooductButtonHandler}>Go TO Products Page</button>
      </p>
      <p>
        <button onClick={postsButtonHandler}>Go TO posts Page</button>
      </p>
    </div>
  );
}
export default Home;
