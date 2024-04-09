import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-center bg-primary p-3 text-primary-foreground">
      <ul className="flex w-full max-w-5xl justify-between">
        <h2 className="flex grow">Logo</h2>

        <div className="flex gap-2">
          <Link href={"#"}>Webinars</Link>
          <Link href={"#"}>About us</Link>
          <Link href={"#"}>Support</Link>
          <Link href={"#"}>Image gallery</Link>
          <Link href={"#"}>Simulation</Link>

          <Button asChild>
            <Link href={"#"}>Login</Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
};
