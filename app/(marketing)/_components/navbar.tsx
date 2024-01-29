"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "flex items-center p-6 fixed top-0 w-full z-50 dark:bg-[#1F1F1F] bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center justify-between md:ml-auto md:justify-end w-full gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
