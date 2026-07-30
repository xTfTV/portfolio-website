"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full justify-center pb-6.25">
      <nav className="relative top-6.25 grid h-14 w-full max-w-2xl grid-cols-4 gap-2 rounded-full bg-[#1a1a1a] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex w-full items-center justify-center rounded-full px-2 text-[10px] font-semibold uppercase tracking-wider transition-colors duration-300 sm:px-4 sm:text-sm ${
                isActive
                    ? "bg-red-500 text-white"
                    : "text-zinc-300 hover:bg-red-500 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}