import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariante = "primario" | "secundario" | "contorno";
export type ButtonTamanho = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors hover:no-underline disabled:pointer-events-none disabled:opacity-60";

const variantes: Record<ButtonVariante, string> = {
  primario: "bg-destaque-500 text-white hover:bg-destaque-600 active:bg-destaque-700",
  secundario: "bg-marca-600 text-white hover:bg-marca-700",
  contorno: "border border-marca-600 bg-fundo text-marca-700 hover:bg-marca-50",
};

const tamanhos: Record<ButtonTamanho, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

type EstiloProps = {
  variante?: ButtonVariante;
  tamanho?: ButtonTamanho;
  /** Ocupa toda a largura disponível. */
  larguraTotal?: boolean;
};

type ButtonComoBotao = EstiloProps & ComponentProps<"button"> & { href?: undefined };
type ButtonComoLink = EstiloProps & ComponentProps<typeof Link> & { href: string };

export type ButtonProps = ButtonComoBotao | ButtonComoLink;

/** Classes do botão, para casos em que o componente não pode ser usado diretamente. */
export function classesBotao({
  variante = "primario",
  tamanho = "md",
  larguraTotal = false,
}: EstiloProps = {}): string {
  return cn(base, variantes[variante], tamanhos[tamanho], larguraTotal && "w-full");
}

/**
 * Botão do site. Com `href`, vira um link (`next/link`) com a mesma aparência.
 */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variante, tamanho, larguraTotal, className, ...resto } = props;
    return (
      <Link
        {...resto}
        className={cn(classesBotao({ variante, tamanho, larguraTotal }), className)}
      />
    );
  }

  const { variante, tamanho, larguraTotal, className, type = "button", ...resto } = props;
  return (
    <button
      {...resto}
      type={type}
      className={cn(classesBotao({ variante, tamanho, larguraTotal }), className)}
    />
  );
}
