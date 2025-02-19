async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    return res.json();
  }
  
  export default async function Post({ params }) {
    const { id } = await params;
  
    const post = await getPost(id);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="mb-4">Post ID: {post.id}</p>
        <p className="mb-4">Author: User {post.userId}</p>
        <p>{post.body}</p>
      </div>
    );
  }
  