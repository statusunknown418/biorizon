import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import es from "~/locales/es.json";
import { auth } from "~/server/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1 className="my-6 w-full max-w-6xl text-left text-4xl font-bold tracking-tight">
        Welcome {session?.user.name}
      </h1>

      <div className="grid w-full max-w-6xl grid-cols-2">
        <section className="flex h-full w-full flex-col gap-4">
          <h2 className="text-lg font-medium text-muted-foreground">
            {es.homePage.modules}
          </h2>
        </section>

        <section className="flex h-full w-full flex-col gap-4">
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
        </section>
      </div>
    </section>
  );
}
