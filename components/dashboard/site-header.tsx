"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Selamat Pagi ");
    } else if (hour < 18) {
      setGreeting("Selamat Siang ");
    } else {
      setGreeting("Selamat Malam ");
    }
  }, []); // ✅ selalu ada array kosong

  const { data: session } = useSession();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-bold lg:text-lg">
          {greeting} {session?.user?.name}
        </h1>
      </div>
    </header>
  );
}
