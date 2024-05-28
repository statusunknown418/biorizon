import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/mdx";
import { getBlogPosts } from "~/lib/mdx";

export default function SubItemPage({
  params,
}: {
  params: { slug: string; subLink: string };
}) {
  const post = getBlogPosts(params.slug).find(
    (post) => post.slug === params.subLink,
  );

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
