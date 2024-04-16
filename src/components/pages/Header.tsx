"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import es from "~/locales/es.json";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center bg-primary p-3">
      <ul className="flex w-full max-w-5xl items-center justify-between">
        <h2 className="flex grow">{es.landingPage.logo}</h2>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href={"#"}>Webinars</Link>
          </Button>

          <Button asChild>
            <Link href={"#"}>Galeria</Link>
          </Button>

          <Button asChild>
            <Link href={"#"}>Simulacion</Link>
          </Button>

          <Button asChild>
            <Link href={"#"}>Nosotros</Link>
          </Button>

          <Button asChild>
            <Link href={"#"}>Soporte</Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            onClick={() =>
              signIn("google", {
                callbackUrl: "/home",
              })
            }
          >
            <Link href={"#"}>Iniciar sesion</Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
};
