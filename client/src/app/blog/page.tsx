// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// export default async function DynamicPageRoute({ params }: PageProps) {
//   const slug = (await params).slug;

//   return (
//     <div>
//       <h1>Slug: {slug}</h1>
//     </div>
//   );
// }
import { Card, type CardProps } from "@/components/Card";
import { ContentList } from "@/components/ContentList";
import { BlockRenderer } from "@/components/BlockRender";
import { getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";

async function loader(slug: string) {
  const { data } = await getPageBySlug("blog");
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}


export default async function BlogRoute({ params }: PageProps) {
  const { blocks } = await loader("blog");

  return (
    <>
      <div>
        <BlockRenderer blocks={blocks} />
        <ContentList
          headline="Check out our latest articles"
          path="/api/articles"
          component={BlogCard}
        />
      </div>
    </>
  );
}
