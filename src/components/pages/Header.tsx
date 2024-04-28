"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import es from "~/locales/es.json";
import { Button } from "../ui/button";

export const Header = ({ className }: { className?: string }) => {
  const { data, status } = useSession();

  return (
    <nav
      className={cn(
        "flex w-full items-center justify-center border-b bg-background p-3",
        className,
      )}
    >
      <ul
        className={cn(
          "flex w-full items-center justify-between",
          status === "authenticated" ? "text-muted-foreground" : "",
        )}
      >
        <Button className="text-foreground" variant={"ghost"} asChild>
          <Link href={status === "authenticated" ? "/home" : "/"}>
            {es.landingPage.logo}
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Button asChild variant={"ghost"}>
            <Link href={"/home/webinars"}>Webinars</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"/home/gallery"}>Galeria</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"/about-us"}>Nosotros</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"/support"}>Soporte</Link>
          </Button>

          {!data?.user.email && (
            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/home",
                })
              }
            >
              Iniciar sesion
            </Button>
          )}
        </div>
      </ul>
    </nav>
  );
};
