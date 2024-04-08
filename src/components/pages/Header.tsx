import Link from "next/link";

export const Header = () => {
  return (
    <nav className="sticky inset-0 flex w-full items-center justify-between bg-sky-800 p-3 text-white">
      <h2 className="flex grow">Logo</h2>

      <div className="flex gap-2">
        <Link href={"#"}>Nav 1</Link>
        <Link href={"#"}>Nav 2</Link>
        <Link href={"#"}>Nav 3</Link>
      </div>
    </nav>
  );
};
