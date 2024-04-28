"use client";

import { BookmarkIcon, ImageIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/lib/utils";
import { UserDropdown } from "../UserDropdown";

export const Sidebar = () => {
  const selectedSegment = useSelectedLayoutSegment();

  return (
    <aside className="h-full w-60 border-r py-4">
      <ul className="flex h-full w-full flex-col p-2">
        <Link
          href={"/home"}
          className={cn(
            !selectedSegment ? "text-foreground" : "text-muted-foreground",
            "flex w-full items-center gap-2 rounded-lg border border-transparent p-3 text-sm transition-colors hover:bg-muted hover:text-foreground",
          )}
        >
          <BookmarkIcon />
          Modulos
        </Link>

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
