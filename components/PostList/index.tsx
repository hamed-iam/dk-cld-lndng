import React, { useState } from "react";
import { usePosts } from "@/hooks/usePosts";
import Link from "next/link";

const PostList = () => {
  const [postCount, setPostCount] = useState(10);
  const { data, isLoading, isFetching } = usePosts(postCount);

  if (isLoading) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {data?.map((post: any, index: number) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <Link href="#">{post.title}</Link>
            </div>
          </li>
        ))}
      </ul>
      {postCount <= 90 && (
        <button
          onClick={() => setPostCount(postCount + 10)}
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Show More"}
        </button>
      )}

    </section>
  );
};

export default PostList;
