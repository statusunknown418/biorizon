import { SignOut } from "~/components/pages/SignOut";
import { auth } from "~/server/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <section className="flex w-full items-center justify-center">
      <section className="h-full w-full max-w-5xl">
        <h1>Home Page</h1>

        <p>Welcome {session?.user.name}</p>
        <p>{session?.user.email}</p>

        <SignOut />
      </section>
    </section>
  );
}
