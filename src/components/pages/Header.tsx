import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center bg-primary p-3 text-primary-foreground">
      <ul className="flex w-full max-w-5xl items-center justify-between">
        <h2 className="flex grow">Logo</h2>

        <div className="flex items-center gap-2">
          <Link href={"#"}>Webinars</Link>
          <Link href={"#"}>Nosotros</Link>
          <Link href={"#"}>Soporte</Link>
          <Link href={"#"}>Galeria</Link>
          <Link href={"#"}>Simulacion</Link>

          <Button asChild>
            <Link href={"#"}>Login</Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
};
