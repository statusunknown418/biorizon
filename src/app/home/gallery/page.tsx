import es from "~/locales/es.json";

export default function GalleryPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <h1>Galería de imágenes y videos explicativos</h1>

      {es.gallery.map((galleryItem, idx) => (
        <div key={idx} className="flex flex-col gap-4 text-muted-foreground">
          <h2>{galleryItem.topic}</h2>

          {galleryItem.links.map((link) => (
            <iframe
              width="560"
              height="315"
              key={link}
              src={link}
              title={galleryItem.topic}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ))}
        </div>
      ))}
    </section>
  );
}
