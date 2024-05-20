import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import es from "~/locales/es.json";
import { auth } from "~/server/auth";

function toRoman1(num: number) {
  const letters = ["I", "V", "X", "L", "C", "D", "M"];
  let result = "";
  for (let radix = 5; num; radix ^= 7) {
    result += letters.shift()?.repeat(num % radix) + result;
    num = Math.floor(num / radix);
  }
  return result;
}

export default async function HomePage() {
  const session = await auth();

  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-left text-4xl font-bold tracking-tight">
          Bienvenido {session?.user.name}
        </h1>

        <h2 className="text-lg font-medium text-muted-foreground">
          {es.homePage.modules}
        </h2>
      </div>

      <section className="grid grid-cols-3 gap-8">
        {es.modules.map((module, idx) => (
          <article
            key={module.title}
            className="flex h-full max-w-sm flex-col items-center justify-between gap-4 rounded-2xl border bg-muted/30 pb-8"
          >
            <Image
              src={module.image}
              width={200}
              height={200}
              alt="image"
              className="h-52 w-full overflow-hidden rounded-lg object-cover"
            />

            <div className="flex flex-grow flex-col gap-4 px-8">
              <h2 className="text-lg font-bold">
                {toRoman1(idx + 1)}. {module.title}
              </h2>

              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
            </div>

            <Button asChild variant={"outline"}>
              <Link href={module.link}>
                Ver más
                <ArrowRightIcon />
              </Link>
            </Button>
          </article>
        ))}
      </section>

      {/* <section className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-medium text-muted-foreground">Quizzes</h2>

          <article className="grid grid-cols-1 gap-4 rounded-lg">
            <section className="flex justify-between gap-4 rounded-lg border bg-muted/5 p-5">
              <div className="flex flex-col gap-4">
                <p className="font-semibold">{es.homePage.general.title}</p>

                <p className="text-muted-foreground">
                  {es.homePage.general.description}
                </p>

                <Button asChild variant={"outline"} className="mt-auto">
                  <Link
                    href={"https://take.quiz-maker.com/QYXHK6DNB"}
                    target="_blank"
                  >
                    {es.homePage.takeQuiz}
                  </Link>
                </Button>
              </div>

              <Image
                src={"/general-quiz.jpeg"}
                width={200}
                height={200}
                alt="image"
                className="rounded-lg object-cover"
              />
            </section>

            <section className="flex justify-between gap-4 rounded-lg border bg-muted/5 p-5">
              <div className="flex flex-col gap-4">
                <p className="font-semibold">{es.homePage.images.title}</p>

                <p className="text-muted-foreground">
                  {es.homePage.images.description}
                </p>

                <Button asChild variant={"outline"} className="mt-auto">
                  <Link
                    href={"https://take.quiz-maker.com/QL0YD9JDD"}
                    target="_blank"
                  >
                    {es.homePage.takeQuiz}
                  </Link>
                </Button>
              </div>

              <Image
                src={"/vascular.png"}
                width={200}
                height={200}
                alt="image"
                className="rounded-lg"
              />
            </section>

            <section className="flex justify-between gap-4 rounded-lg border bg-muted/5 p-5">
              <div className="flex flex-col gap-4">
                <p className="font-semibold">{es.homePage.patology.title}</p>

                <p className="text-muted-foreground">
                  {es.homePage.patology.description}
                </p>

                <Button asChild variant={"outline"} className="mt-auto">
                  <Link
                    href={"https://take.quiz-maker.com/QL0Y59JDD"}
                    target="_blank"
                  >
                    {es.homePage.takeQuiz}
                  </Link>
                </Button>
              </div>

              <Image
                src={"/vascular.png"}
                width={200}
                height={200}
                alt="image"
                className="rounded-lg"
              />
            </section>
          </article>
        </section> */}
    </section>
  );
}
