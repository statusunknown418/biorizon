"use client";

import { CaretSortIcon, ExitIcon } from "@radix-ui/react-icons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export const UserDropdown = () => {
  const { data } = useSession({
    required: true,
  });
  const [open, change] = useState(false);

  if (!data) {
    return <Skeleton className="h-10 w-full" />;
  }

  return (
    <DropdownMenu open={open} onOpenChange={change}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="h-10 w-full justify-between focus-visible:ring-0"
        >
          <div className="flex items-center gap-2">
            {data?.user.image && (
              <Image
                src={data?.user.image}
                alt={data?.user.name ?? ""}
                width={28}
                height={28}
                className="rounded-sm border"
              />
            )}

            <span className="max-w-[15ch] overflow-hidden text-ellipsis">
              {data?.user.name}
            </span>
          </div>

          <CaretSortIcon
            className={cn(
              "h-5 w-5 text-muted-foreground transition-all",
              open && "rotate-90",
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="right" align="end">
        <DropdownMenuLabel>
          <span>{data?.user.name}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={async () => {
            await signOut({
              callbackUrl: "/",
            });
          }}
        >
          <ExitIcon className="text-destructive" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
