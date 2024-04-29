import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import es from "~/locales/es.json";

export default function ModulesPage({ params }: { params: { link: string } }) {
  const learningMod = es.modules.find(
    (mod) => mod.link.split("/home/modules/")[1] === params.link,
  );

  const moduleIndex = es.modules.findIndex(
    (mod) => mod.link.split("/home/modules/")[1] === params.link,
  );

  const prevModule = es.modules[moduleIndex - 1];
  const nextModule = es.modules[moduleIndex + 1];

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
    <section className="mx-auto flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">
          {learningMod.title}
        </h1>

        <p className="text-muted-foreground">{learningMod.description}</p>
      </header>

      <Image
        src={learningMod.image}
        width={300}
        height={200}
        className="rounded-lg"
        alt="module-main-resource"
      />

      <Accordion type="multiple">
        <ul className="list-decimal">
          {learningMod.topics.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <li key={section.title} className="ml-4">
                <AccordionTrigger>
                  <h2 className="text-lg font-medium">{section.title}</h2>
                </AccordionTrigger>

                <AccordionContent>
                  <article className="flex flex-col gap-4">
                    <ul className="list-disc">
                      {section.subTopics.map((lesson) => (
                        <li key={lesson.title} className="ml-4">
                          <h3 className="text-base font-semibold">
                            {lesson.title}
                          </h3>

                          <div className="my-4 ml-4 list-disc text-muted-foreground">
                            {lesson.contents.map((content, idx) => (
                              <p
                                key={content.description}
                                className="my-2.5 list-item"
                              >
                                <span className="mr-1 text-foreground">
                                  {Array.from({ length: idx + 1 })
                                    .fill("i")
                                    .join("")}
                                  .
                                </span>

                                {content.description}
                              </p>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <Separator />

                    <div className="mb-4 flex flex-wrap items-center gap-6">
                      {section.images?.map((image) => (
                        <div
                          key={image}
                          className="flex max-w-[200px] flex-col gap-2"
                        >
                          <Image
                            key={image}
                            alt="module-resource"
                            src={image}
                            width={200}
                            height={200}
                            className="rounded-lg"
                          />

                          <small className="text-center leading-3 text-muted-foreground">
                            Imagen referencial del modulo {learningMod.title}
                          </small>
                        </div>
                      ))}
                    </div>
                  </article>
                </AccordionContent>
              </li>
            </AccordionItem>
          ))}
        </ul>
      </Accordion>

      <div className="flex flex-col rounded-xl border-l-4 border-green-500 bg-green-950 p-3 pl-6">
        <p className="text-muted-foreground">Preparado para un quiz?</p>
        <Button asChild variant={"link"} className="p-0">
          <Link href={learningMod.quizLInk} target="_blank">
            Sí, con todo
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button asChild variant={"outline"}>
          <Link
            href={moduleIndex === 0 ? "/home" : prevModule?.link ?? "/home"}
          >
            <ArrowLeftIcon /> {moduleIndex === 0 ? "Inicio" : "Anterior"}
          </Link>
        </Button>

        <Button asChild variant={"outline"}>
          <Link href={nextModule?.link ?? "/home"}>
            {nextModule ? nextModule.title : "Regresar al inicio"}
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
