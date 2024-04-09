import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center bg-primary p-3 text-primary-foreground">
      <ul className="flex w-full max-w-5xl items-center justify-between">
        <h2 className="flex grow">Logo</h2>

        <div className="flex items-center gap-4">
          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Webinars</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Nosotros</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Soporte</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Galeria</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Simulacion</Link>
          </Button>

          <Button asChild variant={"ghost"}>
            <Link href={"#"}>Login</Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
};
