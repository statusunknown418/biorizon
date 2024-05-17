import es from "~/locales/es.json";

export default function GalleryPage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8">
      <h1 className="text-2xl font-bold">
        Galería de imágenes y videos explicativos
      </h1>

      {es.gallery.map((galleryItem, idx) => (
        <div key={idx} className="flex flex-col gap-4 text-muted-foreground">
          <h2 className="text-xl">{galleryItem.topic}</h2>

          <section className="grid grid-cols-2 gap-5">
            {galleryItem.links.map((link) => (
              <iframe
                width="480"
                height="290"
                key={link}
                src={link}
                title={galleryItem.topic}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ))}
          </section>
        </div>
      ))}
    </section>
  );
}
