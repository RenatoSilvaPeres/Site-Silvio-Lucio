import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navegacao } from "@/config/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NaoEncontrada() {
  const outrasPaginas = navegacao.filter((item) => item.href !== "/");

  return (
    <Container largura="estreito" className="py-24 text-center">
      <p className="font-titulo text-destaque-500 text-6xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">Página não encontrada</h1>
      <p className="text-texto-suave mt-4 text-lg">
        O endereço pode ter mudado ou não existe mais. Confira se foi digitado corretamente ou volte
        para a página inicial.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/" tamanho="lg">
          Voltar para o início
        </Button>
        <Button href="/contato" variante="contorno" tamanho="lg">
          Falar com a gente
        </Button>
      </div>

      <nav aria-label="Outras páginas" className="mt-12">
        <p className="text-texto-suave text-sm">Ou acesse:</p>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {outrasPaginas.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.rotulo}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
