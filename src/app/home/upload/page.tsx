"use client";

import Image from "next/image";
import { useState } from "react";
import { UploadDropzone } from "~/lib/uploaders";

export default function CheckImagesPage() {
  const [images, setImage] = useState<{ url: string }[]>();

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8">
      <h1 className="text-2xl font-bold">
        Utiliza AI para comprobar tus imágenes
      </h1>

      <UploadDropzone
        endpoint="imageUploader"
        className="border"
        onUploadBegin={console.log}
        onClientUploadComplete={(f) => setImage(f)}
        content={{
          label: "Arrastra y suelta tus imágenes aquí",
          button: "Seleccionar",
        }}
        appearance={{
          container: "border border-primary/50",
        }}
      />

      {images?.map((image, idx) => (
        <article key={idx} className="flex gap-4">
          <Image src={image.url} alt="uploaded-image" />
        </article>
      ))}

      <p className="text-sm text-muted-foreground">
        Utiliza un modelo entrenado de OpenAI para comparar tus imágenes con
        nuestras pruebas internas y recibirás un informe detallado sobre ello y
        como mejorar.
      </p>
    </section>
  );
}
