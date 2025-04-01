import { BlockRenderer } from "@/components/BlockRender";
import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loader";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
