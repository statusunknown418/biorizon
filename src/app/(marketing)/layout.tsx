import { type ReactNode } from "react";
import { Header } from "~/components/pages/Header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full">
      <Header />

      <section className="h-full w-full">{children}</section>
    </div>
  );
}
