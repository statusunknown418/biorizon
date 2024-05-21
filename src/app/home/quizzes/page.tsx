import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import es from "~/locales/es.json";

export default function QuizzesPage() {
  return (
    <section>
      <h2 className="text-4xl font-bold tracking-tight">Quizzes disponibles</h2>

      <section className="mt-8 grid grid-cols-2 gap-4">
        {es.modules.map(
          (module) =>
            module.quizLInk && (
              <article
                key={module.title}
                className="flex gap-4 rounded-lg border bg-gray-700 p-4 text-primary-foreground"
              >
                <Image
                  src={module.image}
                  width={200}
                  height={200}
                  alt="image"
                  className="rounded-lg object-cover"
                />

                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium text-white">
                    {module.title}
                  </h2>

                  <Button asChild variant={"outline"} size={"sm"}>
                    <Link href={module.link}>
                      Iniciar
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                </div>
              </article>
            ),
        )}
      </section>
    </section>
  );
}
