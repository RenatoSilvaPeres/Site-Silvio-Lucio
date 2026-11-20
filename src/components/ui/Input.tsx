import type { ComponentProps } from "react";
import { classesCampo } from "./campo";

type InputProps = ComponentProps<"input"> & {
  /**
   * Marca o campo com erro (borda vermelha e `aria-invalid`). Ligue a mensagem
   * de erro ao campo com `aria-describedby`.
   */
  invalido?: boolean;
};

/** Campo de texto de uma linha. */
export function Input({ invalido = false, className, type = "text", ...resto }: InputProps) {
  return (
    <input
      {...resto}
      type={type}
      aria-invalid={invalido || undefined}
      className={classesCampo(invalido, className)}
    />
  );
}
