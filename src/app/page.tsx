import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex items-center justify-center gap-2">
        {posts.map((post, index) => (
          <p className="p-4 bg-white rounded-lg shadow-lg text-black">{post.name}</p>
        ))}
      </div>
    </main>
  );
}
