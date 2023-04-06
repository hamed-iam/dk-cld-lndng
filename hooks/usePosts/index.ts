import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (limit = 10) => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const result = posts.data.filter((x: any) => x.id <= limit);
  return result;
};

const usePosts = (limit: number) => {
  return useQuery(["posts", limit], () => fetchPosts(limit));
};

export { usePosts, fetchPosts };
