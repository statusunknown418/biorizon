"use client";

import Image from "next/image";
import { useState } from "react";
import { PiNoteBlank } from "react-icons/pi";
import { toast } from "sonner";
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
        onUploadBegin={(f) => toast.info("Subiendo imágenes...")}
        onClientUploadComplete={(f) => setImage(f)}
        appearance={{
          container: "border border-primary/50",
        }}
      />

      <p className="text-sm text-muted-foreground">
        Utiliza un modelo entrenado de OpenAI para comparar tus imágenes con
        nuestras pruebas internas y recibirás un informe detallado sobre ello y
        como mejorar.
      </p>

      <h2>Mis imágenes</h2>

      {!images?.length && (
        <p className="flex max-w-sm flex-col items-center gap-4 rounded-lg border p-5 text-sm text-muted-foreground">
          <PiNoteBlank size={20} />
          No has subido ninguna imagen
        </p>
      )}

      {images?.map((image, idx) => (
        <article key={idx} className="flex gap-4">
          <Image
            src={image.url}
            alt="uploaded-image"
            width={200}
            height={200}
          />
        </article>
      ))}
    </section>
  );
}
