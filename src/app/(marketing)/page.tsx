import Image from "next/image";
import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="grid h-full w-full grid-cols-1 place-items-center">
      <section className="flex w-full justify-center bg-gradient-to-b from-[#8CDBE0] to-[#61BFC8] py-20">
        <article className="flex max-w-5xl flex-col gap-4">
          <div className="flex max-w-5xl flex-col gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-sky-900">Master</span> ultrasound techniques
            </h1>

            <p className="text-sky-900">
              Learn how to use ultrasound to diagnose and treat patients with
              our comprehensive courses.
            </p>

            <Button>Learn more</Button>
          </div>

          <Image
            src={"https://picsum.photos/400/400"}
            width={400}
            height={400}
            alt="landing"
          />
        </article>
      </section>
    </main>
  );
}
