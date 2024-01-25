import React from "react";

async function GetUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Users() {
  const users = await GetUsers();
  return (
    <ol className="text-white text-sm">
      {users.map((user: any) => {
        return (
          <li key={user.id}>
            <span className="text-black text-sm font-semibold">

            Name:</span> {user.name} 
            
            <p className="text-indigo-700">
              <span className="text-indigo-900 text-sm font-semibold">Email: </span>{user.email}
            </p> 

            
           
          </li>
        );
      })}
    </ol>
  );
}
