import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentProps<"div"> & {
  /** Largura máxima: `padrao` (layout geral) ou `estreito` (textos longos). */
  largura?: "padrao" | "estreito";
};

/** Centraliza o conteúdo com a largura máxima e as margens laterais do site. */
export function Container({ largura = "padrao", className, ...resto }: ContainerProps) {
  return (
    <div
      {...resto}
      className={cn(
        "mx-auto w-full px-4",
        largura === "padrao" ? "max-w-6xl" : "max-w-3xl",
        className,
      )}
    />
  );
}
