import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { AuthProvider } from "~/components/AuthProvider";
import { Header } from "~/components/pages/Header";
import { cn } from "~/lib/utils";
import { auth } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Biorizon",
  description: "The medical course platform of the 21st century",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={cn(
          `font-sans ${inter.variable}`,
          "bg-background text-foreground",
        )}
      >
        <AuthProvider session={session}>
          <TRPCReactProvider>
            <Header />
            <div>{children}</div>
          </TRPCReactProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
