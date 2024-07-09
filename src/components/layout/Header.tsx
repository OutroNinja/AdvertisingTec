"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed backdrop-blur-md z-50 top-0 left-0 right-0 bg-background/75 border-b">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4 py-5">
          <Link
            href="#"
            className="flex items-center gap-4 px-5"
            prefetch={false}
          >
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="font-semibold">Advertising Tec</span>
          </Link>
        </div>
        <div className="items-center gap-4">
          <div className="hidden md:flex gap-6">
            <nav className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition"
                prefetch={false}
              >
                Atendimento ao Cliente
              </Link>
            </nav>
            <Button className="gap-2">
              Nós Contrate
              <MessageCircle />
            </Button>
          </div>

          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                >
                  <Menu size="26" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="px-7 pr-0 pl-10">
                <SheetHeader>
                  <div className="my-5">
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-5 border-r"
                      prefetch={false}
                    >
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                </SheetHeader>
                <SheetDescription>Oi</SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
