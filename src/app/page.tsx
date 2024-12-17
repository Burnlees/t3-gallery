const mockUrls = [
  "https://utfs.io/f/3en6V5DwL4xhnSWvFtxaW3XrgP9mfOz6oJv5NT4GSc2CV8KQ",
  "https://utfs.io/f/3en6V5DwL4xhPQTFvcSTEyvBLKxQR7Xi9fah6rHsCYZDSj8J",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
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
        ].map((image) => {
          return (
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
