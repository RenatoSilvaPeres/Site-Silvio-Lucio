import type { ComponentProps } from "react";
import { classesCampo } from "./campo";

type TextareaProps = ComponentProps<"textarea"> & {
  /**
   * Marca o campo com erro (borda vermelha e `aria-invalid`). Ligue a mensagem
   * de erro ao campo com `aria-describedby`.
   */
  invalido?: boolean;
};

/** Campo de texto de várias linhas. */
export function Textarea({ invalido = false, className, rows = 5, ...resto }: TextareaProps) {
  return (
    <textarea
      {...resto}
      rows={rows}
      aria-invalid={invalido || undefined}
      className={classesCampo(invalido, `resize-y ${className ?? ""}`)}
    />
  );
}
