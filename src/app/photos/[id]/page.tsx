import { getImage } from "~/server/queries";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const idAsNumber = Number((await params).id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");

  const image = await getImage(idAsNumber);
  return <FullPageImageView id={idAsNumber} />;
}
