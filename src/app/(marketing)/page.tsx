import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const secondRow = [
  {
    text: "Abdominal",
    image: "/abdominal.png",
  },
  {
    text: "Musculo-esqueletica",
    image: "/muscle.png",
  },
  {
    text: "Obstretica",
    image: "/obstetric.png",
  },
  {
    text: "Ginecologica",
    image: "/gynecological.png",
  },
  {
    text: "Urologica",
    image: "/urology.png",
  },
  {
    text: "Vascular",
    image: "/vascular.png",
  },
];

export default async function Home() {
  return (
    <main className="grid h-full w-full grid-cols-1 place-items-center">
      <section className="flex w-full justify-center bg-gradient-to-b from-[#8CDBE0] to-[#61BFC8] py-20">
        <article className="flex max-w-5xl gap-4">
          <div className="flex max-w-5xl flex-col gap-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-sky-900">Biorizon</span> echography course
              platform
            </h1>

            <p className="text-sky-900">
              Practical and theoretical training in echography for medical
              professionals. Learn to accurately interpret images.
            </p>

            <Button>Learn more</Button>
          </div>

          <Image src={"/landing.png"} width={800} height={600} alt="landing" />
        </article>
      </section>

      <section className="flex w-full justify-center bg-primary py-10 text-primary-foreground">
        <article className="flex max-w-5xl flex-col gap-6">
          <h2 className="font-semibold uppercase">
            Medical training techniques
          </h2>

          <ul className="grid grid-cols-3 gap-5">
            {secondRow.map(({ text, image }, idx) => (
              <li key={idx} className="flex gap-4">
                {idx !== 0 && idx !== 3 && <Separator orientation="vertical" />}

                <div className="flex flex-col gap-4" key={image}>
                  <Image src={image} width={400} height={200} alt="signal" />

                  <p className="text-center text-sm text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
