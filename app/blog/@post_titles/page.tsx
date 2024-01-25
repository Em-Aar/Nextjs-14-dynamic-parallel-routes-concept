import React from "react";
import Link from "next/link";

export async function Posts() {
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Titles() {
  // const titles = decodeURIComponent(params.title);
  const posts = await Posts();

  return (
    <ol className="px-8 py-5 text-indigo-300 underline underline-offset-4">
      {posts.posts.map((p:any) => {
        return (
          <li key={p.id}>
            <Link href={`/blog/${p.title}`}>{p.id}:  {p.title}</Link>
          </li>
        );
      })}
    </ol>
  );
}