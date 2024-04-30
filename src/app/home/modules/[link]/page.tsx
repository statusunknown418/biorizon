import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { PiTriangle } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
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
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <div className="flex gap-4">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight">
            {learningMod.title}
          </h1>

          <p className="text-muted-foreground">{learningMod.description}</p>
        </header>

        <Image
          src={learningMod.image}
          width={400}
          height={300}
          className="rounded-lg"
          alt="module-main-resource"
        />
      </div>

      <Accordion type="multiple">
        <ul>
          {learningMod.topics.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <li key={section.title}>
                <AccordionTrigger className="justify-start">
                  <PiTriangle
                    size={16}
                    className="mr-2 rotate-90 text-muted-foreground"
                  />
                  <h2 className="text-lg font-medium">{section.title}</h2>
                </AccordionTrigger>

                <AccordionContent>
                  <article className="flex flex-col gap-4">
                    <div className="mb-4 flex justify-center gap-10">
                      {section.images?.map((image, idx) => (
                        <article
                          key={image}
                          className="flex gap-2 rounded-lg border"
                        >
                          <Image
                            key={image}
                            alt="module-resource"
                            src={image}
                            width={200}
                            height={100}
                            className="rounded-l-lg object-cover"
                          />

                          <div className="flex flex-col gap-2 p-4">
                            <p className="max-w-80 text-base font-medium">
                              {section.subTopics[idx]?.title}
                            </p>

                            <Button
                              asChild
                              size={"sm"}
                              className="mb-4 mt-auto"
                            >
                              <Link href={"#"}>Saber mas</Link>
                            </Button>
                          </div>
                        </article>
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
