"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/campaigns", label: "Campaigns" },
    { href: "/campaign/new", label: "New Campaign" },
    { href: "/products", label: "Products" },
    { href: "/product-detail", label: "Product Detail" },
  ];

  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between sm:justify-start sm:space-x-6">
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className={cn(
            "absolute sm:relative top-16 sm:top-0 left-0 right-0 bg-background sm:bg-transparent border-b sm:border-0",
            "flex flex-col sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0",
            isMenuOpen ? "block" : "hidden sm:flex"
          )}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary px-4 py-3 sm:px-0 sm:py-0",
                  pathname === link.href ? "text-primary bg-accent/50 sm:bg-transparent" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}