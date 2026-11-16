import Link from "next/link";
import { navegacao, siteConfig } from "@/config/site";
import { MenuMobile } from "./MenuMobile";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="border-borda bg-fundo/95 sticky top-0 z-40 border-b backdrop-blur">
      <a
        href="#conteudo"
        className="bg-marca-600 sr-only rounded px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4">
        <Link
          href="/"
          className="font-titulo text-marca-900 text-lg font-extrabold hover:no-underline"
        >
          {siteConfig.nome}
        </Link>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.rotulo}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/simulador"
          className="bg-destaque-500 hover:bg-destaque-600 hidden rounded-md px-4 py-2 text-sm font-semibold text-white hover:no-underline sm:inline-block"
        >
          Simular economia
        </Link>

        <MenuMobile />
      </div>
    </header>
  );
}
