import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/3en6V5DwL4xhnSWvFtxaW3XrgP9mfOz6oJv5NT4GSc2CV8KQ",
  "https://utfs.io/f/3en6V5DwL4xhPQTFvcSTEyvBLKxQR7Xi9fah6rHsCYZDSj8J",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => {
          return <div key={post.id}>{post.name}</div>;
        })}
        {[
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
        ].map((image, index) => {
          return (
            <div key={image.id + "-" + index} className="w-48 p-4">
              <img src={image.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
