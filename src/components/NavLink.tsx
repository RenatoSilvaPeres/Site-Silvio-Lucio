"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

/** Link de navegação que destaca a página atual. */
export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const ativo = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={ativo ? "page" : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium hover:no-underline ${
        ativo
          ? "bg-marca-50 text-marca-700"
          : "text-texto-suave hover:bg-fundo-suave hover:text-marca-700"
      }`}
    >
      {children}
    </Link>
  );
}
