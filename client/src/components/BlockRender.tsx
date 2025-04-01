import { Block } from "@/type";
import { HeroSection } from "./blocks/HeroSection";
import { InfoBlock } from "./blocks/InfoBlock";
import { FeaturedArticle } from "./blocks/FeaturedArticle";
import { Subscribe } from "./blocks/Subscribe";


function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    case "blocks.featured-article":
      return <FeaturedArticle {...block} key={index} />;
    case "blocks.subscribe":
      return <Subscribe {...block} key={index} />;
    // case "blocks.heading":
    //   return <Heading {...block} key={index} />;
    // case "blocks.paragraph-with-image":
    //   return <ParagraphWithImage {...block} key={index} />;
    // case "blocks.paragraph":
    //   return <Paragraph {...block} key={index} />;
    // case "blocks.full-image":
    //   return <FullImage {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}