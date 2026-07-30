"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Logout", href: "/logout" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex w-full justify-center pb-6.25">
      <nav
        className="relative top-6.25 inline-flex h-10 w-fit items-center gap-4 rounded-full bg-[#1a1a1a] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        style={{
          paddingInline: "clamp(1rem, 2vw, 1.5rem)",
        }}
      >
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.name}
              href={link.href}
              style={{
                paddingInline: "clamp(2.5rem, 5vw, 4rem)",
              }}
              className={`
                relative flex h-full items-center justify-center
                overflow-hidden whitespace-nowrap rounded-full
                text-sm font-semibold uppercase tracking-wide text-white
                before:absolute before:inset-0 before:origin-left
                before:rounded-full before:bg-[#ff2d3b]
                before:transition-transform before:duration-300
                ${
                  isActive
                    ? "before:scale-x-100"
                    : "before:scale-x-0 hover:before:scale-x-100"
                }
              `}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}