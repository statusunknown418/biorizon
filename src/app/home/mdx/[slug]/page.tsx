import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/mdx";
import { getBlogPosts } from "~/lib/mdx";

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full">
      <article className="prose prose-invert mx-auto max-w-5xl text-justify">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
