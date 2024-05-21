"use client";

import { BookmarkIcon, ImageIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/lib/utils";
import { UserDropdown } from "../UserDropdown";
import es from "~/locales/es.json";

export const Sidebar = () => {
  const selectedSegment = useSelectedLayoutSegment();

  return (
    <aside className="h-full w-80 border-r py-4">
      <ul className="flex h-full w-full flex-col p-2">
        <Link
          href={"/home"}
          className={cn(
            !selectedSegment ? "text-foreground" : "text-muted-foreground",
            "flex w-full items-center gap-2 rounded-lg border border-transparent p-3 text-sm transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <BookmarkIcon />
          Módulos
        </Link>

        <ul className="ml-7 flex flex-col gap-2">
          {es.modules.map((mod) => (
            <Link
              href={mod.link}
              key={mod.title}
              className={cn(
                "rounded-lg p-2 text-xs hover:bg-muted/50",
                selectedSegment === mod.link
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {mod.title}
            </Link>
          ))}
        </ul>

        <Link
          href={"/home/quizzes"}
          className={cn(
            selectedSegment === "quizzes"
              ? "text-foreground"
              : "text-muted-foreground",
            "flex w-full items-center gap-2 rounded-lg border border-transparent p-3 text-sm transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <Pencil1Icon />
          Quizzes
        </Link>

        <Link
          href={"/home/gallery"}
          className={cn(
            selectedSegment === "gallery"
              ? "text-foreground"
              : "text-muted-foreground",
            "flex w-full items-center gap-2 rounded-lg border border-transparent p-3 text-sm transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <ImageIcon />
          Galeria
        </Link>

        <li className="mt-auto">
          <UserDropdown />
        </li>
      </ul>
    </aside>
  );
};
