import Image from "next/image";
import { Button } from "~/components/ui/button";

const secondRow = [
  {
    text: "Abdominal",
    image: "/abdominal.png",
    description: `Una ecografía abdominal generalmente muestra una vista en tiempo real de los órganos abdominales internos,
      como el hígado, vesícula biliar, páncreas, riñones y bazo.`,
  },
  {
    text: "Musculo-esqueletica",
    image: "/muscle.png",
    description: `Una ecografía musculoesquelética muestra imágenes detalladas de los tejidos blandos como músculos, 
      tendones, ligamentos, bolsas y articulaciones`,
  },
  {
    text: "Obstretica",
    image: "/obstetric.png",
    description: `Una ecografía obstétrica proporciona imágenes del feto dentro del útero, 
    permitiendo a los profesionales de la salud evaluar el desarrollo y bienestar fetal.`,
  },
  {
    text: "Ginecologica",
    image: "/gynecology.png",
    description: `Una ecografía ginecológica se centra en el sistema reproductor femenino, incluyendo el útero, ovarios y, 
    en algunos casos, la zona pélvica circundante. `,
  },
  {
    text: "Urologica",
    image: "/urology.png",
    description: `Una ecografía urológica visualiza los órganos del sistema urinario, 
    como los riñones, la vejiga, y en hombres, la próstata. `,
  },
  {
    text: "Vascular",
    image: "/vascular.png",
    description: `Una ecografía vascular se enfoca en examinar los vasos sanguíneos, incluyendo arterias y venas`,
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
        <article className="flex max-w-5xl flex-col gap-8">
          <h2 className="text-lg font-bold uppercase">
            Medical training techniques
          </h2>

          <ul className="grid grid-cols-3 gap-8">
            {secondRow.map(({ text, image, description }, idx) => (
              <li key={idx} className="flex rounded-2xl border bg-muted/10 p-6">
                <section className="flex flex-col gap-4" key={image}>
                  <Image
                    src={image}
                    width={300}
                    height={150}
                    alt="signal"
                    layout="responsive"
                    className="max-h-[250px] flex-grow rounded-2xl object-cover"
                  />

                  <div className="mb-auto flex flex-col gap-2">
                    <h3 className="text-center font-semibold">{text}</h3>

                    <p className="text-center text-sm text-gray-400">
                      {description}
                    </p>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
