import { ItemDetail } from "@/app/components/ItemDetail";

export default async function Detail({
  params,
}: {
  params: Promise<{ slugId: string }>;
}) {
  const { slugId } = await params;


  return (
<div>
    <ItemDetail id={slugId} />
</div>
  );
}
