import es from "~/locales/es.json";

export default function ModulesPage() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1 className="my-6 w-full max-w-6xl text-left text-4xl font-bold tracking-tight">
        {es.homePage.modules}
      </h1>

      <p className="w-full max-w-6xl text-muted-foreground">
        {es.homePage.modulesDescription}
      </p>

      <section className="grid w-full max-w-6xl grid-cols-2 gap-5">
        {es.modules.map((mod, idx) => (
          <article
            key={mod.title}
            className="flex flex-col gap-2 rounded-lg border p-6"
          >
            <h2 className="text-lg font-medium">
              {idx + 1}. {mod.title}
            </h2>

            {mod.topics.map((topic, jdx) => (
              <section key={idx} className="flex flex-col gap-2 pl-4">
                <h3>
                  {idx + 1}.{jdx + 1} {topic.title}
                </h3>

                <div className="pl-4 text-muted-foreground">
                  {topic.subTopics.map((sub, idx) => (
                    <p key={idx} className="list-item list-inside">
                      {sub.title}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        ))}
      </section>
    </section>
  );
}
