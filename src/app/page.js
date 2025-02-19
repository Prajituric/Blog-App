"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const generateHashtags = (id) => {
  return [`#post${id}`]; 
};

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedHashtag, setSelectedHashtag] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();

      const postsWithHashtags = posts.map((post) => ({
        ...post,
        hashtags: generateHashtags(post.id),
      }));

      console.log('Posts with hashtags:', postsWithHashtags); 

      setPosts(postsWithHashtags); 
      setFilteredPosts(postsWithHashtags); 
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedHashtag) {
      const filtered = posts.filter((post) =>
        post.hashtags.includes(selectedHashtag)
      );
      console.log('Filtered posts:', filtered); 
      setFilteredPosts(filtered); 
    } else {
      setFilteredPosts(posts); 
    }
  }, [selectedHashtag, posts]);

  const allHashtags = [...new Set(posts.flatMap((post) => post.hashtags))];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>

      
      <div className="mb-6">
        <h2 className="font-bold">Filter by Hashtag</h2>
        <select
          value={selectedHashtag}
          onChange={(e) => setSelectedHashtag(e.target.value)}
          className="p-2 border rounded-md"
        >
          
          {allHashtags.length > 0 ? (
            allHashtags.map((hashtag) => (
              <option key={hashtag} value={hashtag}>
                {hashtag}
              </option>
            ))
          ) : (
            <option value="">No hashtags available</option>
          )}
        </select>
      </div>

      
      {selectedHashtag && (
        <div className="mb-4">
          <span className="font-bold">Filtering by:</span> {selectedHashtag}
          <button
            onClick={() => setSelectedHashtag('')}
            className="ml-4 text-blue-500 hover:underline"
          >
            Clear Filter
          </button>
        </div>
      )}

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length === 0 ? (
          <p>No posts found with this hashtag.</p>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              <p>{post.body.substring(0, 100)}...</p>
              <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
              <div className="mt-2">
                {}
                {post.hashtags.map((hashtag) => (
                  <span
                    key={hashtag}
                    onClick={() => setSelectedHashtag(hashtag)} 
                    className="cursor-pointer text-blue-500 hover:underline mr-2"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
