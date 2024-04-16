"use client";

import { signOut } from "next-auth/react";
import es from "~/locales/es.json";
import { Button } from "../ui/button";

export const SignOut = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>{es.logout}</Button>
  );
};
