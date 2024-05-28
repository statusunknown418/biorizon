import { notFound } from "next/navigation";
import { getBlogPosts } from "~/lib/mdx";

export default function Blog({ params }: { params: { slug: string } }) {
  const allPosts = getBlogPosts(params.slug);

  if (!allPosts) {
    notFound();
  }

  return (
    <section className="w-full">
      <article className="prose prose-invert mx-auto max-w-5xl text-justify">
        {allPosts.map((post) => (
          <p key={post.slug}>
            {String(post.metadata.title) ?? "Untitled post"}
          </p>
        ))}
      </article>
    </section>
  );
}
