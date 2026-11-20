import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  /** Use `article` quando o cartão tiver conteúdo independente (ex.: post do blog). */
  as?: "div" | "article" | "li";
  /** Realça o cartão ao passar o mouse, para cartões clicáveis. */
  interativo?: boolean;
};

/** Caixa com borda, fundo branco e cantos arredondados. */
export function Card({ as: Tag = "div", interativo = false, className, ...resto }: CardProps) {
  return (
    <Tag
      {...resto}
      className={cn(
        "border-borda bg-fundo rounded-lg border p-6 shadow-sm",
        interativo && "hover:border-marca-200 transition-shadow hover:shadow-md",
        className,
      )}
    />
  );
}
