import { type ReactNode } from "react";
import { Header } from "~/components/pages/Header";
import { Sidebar } from "~/components/pages/Sidebar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-screen w-full flex-col">
      <Header />

      <div className="flex h-full  w-full overflow-y-scroll">
        <Sidebar />

        <section className="h-full w-full overflow-y-scroll p-8 ">
          {children}
        </section>
      </div>
    </section>
  );
}
