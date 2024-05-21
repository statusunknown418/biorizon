import Image from "next/image";
import Link from "next/link";
import { Header } from "~/components/pages/Header";
import { Button } from "~/components/ui/button";
import es from "~/locales/es.json";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="grid h-full w-full grid-cols-1 place-items-center">
        <section className="flex w-full justify-center bg-gradient-to-b from-[#8CDBE0] to-[#61BFC8] py-20">
          <article className="flex max-w-5xl gap-4">
            <div className="flex max-w-5xl flex-col gap-4">
              <h1 className="text-6xl font-extrabold tracking-tight text-sky-900">
                Biorizon
              </h1>

              <p className="text-3xl font-bold text-primary-foreground">
                {es.landingPage.subheading}
              </p>

              <p className="text-sky-900">{es.landingPage.description}</p>

              <Button asChild>
                <Link href={"/home"}>Conocer más</Link>
              </Button>
            </div>

            <Image
              src={"/landing.png"}
              width={500}
              height={200}
              alt="landing"
            />
          </article>
        </section>

        <section className="flex w-full justify-center py-10 text-primary-foreground">
          <article className="flex max-w-5xl flex-col gap-8">
            <h2 className="text-lg font-bold uppercase">
              {es.landingPage.webinarsTitle}
            </h2>

            <ul className="grid grid-cols-3 gap-8">
              {es.landingPage.webinars.map(
                ({ text, image, description }, idx) => (
                  <li
                    key={idx}
                    className="flex rounded-2xl border bg-muted/10 p-6"
                  >
                    <section className="flex flex-col gap-4" key={image}>
                      <Image
                        src={image}
                        width={300}
                        height={150}
                        alt="signal"
                        className="max-h-[250px] flex-grow rounded-2xl object-cover"
                      />

                      <div className="mb-auto flex flex-col gap-2">
                        <h3 className="text-center font-semibold text-foreground">
                          {text}
                        </h3>

                        <p className="text-center text-sm text-gray-400">
                          {description}
                        </p>
                      </div>
                    </section>
                  </li>
                ),
              )}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
