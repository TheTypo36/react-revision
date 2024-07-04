import React, { useEffect } from "react";
import { container, Post, PostCard } from "../components";
import appwriteService from "../appwrite/conf";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((res) => setPosts(res))
      .catch((error) => {
        console.log("allPostPages::getPost", error);
      });
  }, []);
  return (
    <div className="w-full py-8">
      <container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </container>
    </div>
  );
}

export default AllPost;
