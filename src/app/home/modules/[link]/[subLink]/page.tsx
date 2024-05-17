import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import es from "~/locales/es.json";

export default function ModulesPage({
  params,
}: {
  params: { subLink: string; link: string };
}) {
  console.log({ params });

  const learningMod = es.modules.find((mod) =>
    mod.topics.find((topic) =>
      topic.subTopics.find(
        (sub) =>
          sub.subLink.split("/home/modules/" + params.link + "/")[1] ===
          params.subLink,
      ),
    ),
  );

  const subTopicSelected = learningMod?.topics
    .find((topic) =>
      topic.subTopics.find(
        (sub) =>
          sub.subLink.split("/home/modules/" + params.link + "/")[1] ===
          params.subLink,
      ),
    )
    ?.subTopics.find(
      (sub) =>
        sub.subLink.split("/home/modules/" + params.link + "/")[1] ===
        params.subLink,
    );

  if (!learningMod) {
    return (
      <section>
        <h2>Module not found</h2>
        <Button>
          <Link href={"/home"}>Go back</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold tracking-tight">
          {subTopicSelected?.title}
        </h1>
      </header>

      {subTopicSelected?.contents.map((content, idx) => (
        <div key={idx} className="flex flex-col gap-4 text-muted-foreground">
          <p>
            {idx + 1}. {content.description}
          </p>

          <Image
            src={content.image}
            width={400}
            height={200}
            className="self-center rounded-lg"
            alt="module-main-resource"
          />
        </div>
      ))}
    </section>
  );
}
