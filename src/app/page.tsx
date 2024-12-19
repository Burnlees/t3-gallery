import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => {
        return (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <Link
              key={image.id}
              href={`/photos/${image.id}`}
            >
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={480}
                height={480}
                alt={image.name}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center">Please sign in above.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
