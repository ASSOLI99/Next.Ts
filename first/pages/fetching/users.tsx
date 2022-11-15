import { GetStaticProps } from "next";
import React from "react";

const Users: React.FC<{ users: Response[] }> = (props) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.users.map((user: any, i: number) => {
          return (
            <li key={i}>
              {user.name} - phone: {user.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data: Response[] = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
export default Users;
