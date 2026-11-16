"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navegacao } from "@/config/site";
import { NavLink } from "./NavLink";

/** Botão e painel do menu, exibidos apenas em telas pequenas. */
export function MenuMobile() {
  const [aberto, setAberto] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const painelId = useId();

  const fechar = () => setAberto(false);

  // Fecha com a tecla Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!aberto) return;

    function aoPressionarTecla(evento: KeyboardEvent) {
      if (evento.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    }

    document.addEventListener("keydown", aoPressionarTecla);
    return () => document.removeEventListener("keydown", aoPressionarTecla);
  }, [aberto]);

  return (
    <div className="md:hidden">
      <button
        ref={botaoRef}
        type="button"
        aria-expanded={aberto}
        aria-controls={painelId}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        onClick={() => setAberto((valor) => !valor)}
        className="text-marca-900 hover:bg-fundo-suave inline-flex h-10 w-10 items-center justify-center rounded-md"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <nav
        id={painelId}
        aria-label="Menu principal"
        hidden={!aberto}
        className="border-borda bg-fundo absolute inset-x-0 top-16 border-b shadow-md"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {navegacao.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} onClick={fechar} className="block text-base">
                {item.rotulo}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/simulador"
              onClick={fechar}
              className="bg-destaque-500 hover:bg-destaque-600 block rounded-md px-4 py-3 text-center font-semibold text-white hover:no-underline"
            >
              Simular economia
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
