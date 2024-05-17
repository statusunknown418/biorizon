import es from "~/locales/es.json";

export default function GalleryPage() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-8">
      <h1>Galería de imágenes y videos explicativos</h1>

      {es.gallery.map((galleryItem, idx) => (
        <div key={idx} className="flex flex-col gap-4 text-muted-foreground">
          <h2>{galleryItem.topic}</h2>

          {galleryItem.links.map((link) => (
            <iframe width="420" height="315" key={link} src={link}></iframe>
          ))}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ek9Cdl03HTA?si=MI67hy2a411eXkGH"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </section>
  );
}
