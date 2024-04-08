import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-primary text-primary-foreground sticky inset-0 flex w-full items-center justify-center p-3">
      <ul className="flex w-full max-w-5xl justify-between">
        <h2 className="flex grow">Logo</h2>

        <div className="flex gap-2">
          <Link href={"#"}>Nav 1</Link>
          <Link href={"#"}>Nav 2</Link>
          <Link href={"#"}>Nav 3</Link>
        </div>
      </ul>
    </nav>
  );
};
