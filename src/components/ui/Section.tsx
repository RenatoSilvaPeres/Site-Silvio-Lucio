import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionFundo = "padrao" | "suave" | "marca";

const fundos: Record<SectionFundo, string> = {
  padrao: "bg-fundo",
  suave: "bg-fundo-suave",
  marca: "bg-marca-900 text-marca-100 [&_h2]:text-white",
};

type SectionProps = Omit<ComponentProps<"section">, "title"> & {
  /** Usado como âncora e para ligar a seção ao seu título (acessibilidade). */
  id: string;
  titulo?: ReactNode;
  subtitulo?: ReactNode;
  fundo?: SectionFundo;
  /** Largura do conteúdo interno. */
  largura?: "padrao" | "estreito";
};

/**
 * Seção de página com espaçamento vertical padrão, fundo opcional e título.
 * O conteúdo já vem dentro de um `Container`.
 */
export function Section({
  id,
  titulo,
  subtitulo,
  fundo = "padrao",
  largura = "padrao",
  className,
  children,
  ...resto
}: SectionProps) {
  const tituloId = `${id}-titulo`;

  return (
    <section
      {...resto}
      id={id}
      aria-labelledby={titulo ? tituloId : undefined}
      className={cn("py-16 sm:py-20", fundos[fundo], className)}
    >
      <Container largura={largura}>
        {titulo && (
          <header className="mb-10 max-w-2xl">
            <h2 id={tituloId} className="text-3xl sm:text-4xl">
              {titulo}
            </h2>
            {subtitulo && (
              <p
                className={cn(
                  "mt-3 text-lg",
                  fundo === "marca" ? "text-marca-100" : "text-texto-suave",
                )}
              >
                {subtitulo}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
