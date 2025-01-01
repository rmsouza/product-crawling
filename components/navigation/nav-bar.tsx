"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Products URL
          </Link>
          <Link
            href="/products"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/products"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            Products
          </Link>
          <Link
            href="/product-detail"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/product-detail"
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            Product Detail
          </Link>
        </div>
      </div>
    </nav>
  );
}