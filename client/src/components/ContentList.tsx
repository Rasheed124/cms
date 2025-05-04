import { getContent } from "@/data/loader";
import { ArticleProps } from "@/type";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string,      featured?:boolean) {
  const { data, meta } = await getContent(path, featured);
  return {
    articles: (data as ArticleProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  component,
  headlineAlignment,
}: Readonly<ContentListProps>) {
  const { articles } = await loader(path, featured);
  const Component = component;
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h3 className={`content-items__headline mb-5 ${headlineAlignment ?? ""}`}>
        {headline || "Featured Articles"}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
    </section>
  );
}