import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type LabelProps = ComponentProps<"label"> & {
  /** Mostra um asterisco e avisa leitores de tela que o campo é obrigatório. */
  obrigatorio?: boolean;
};

/** Rótulo de campo de formulário. */
export function Label({ obrigatorio = false, className, children, ...resto }: LabelProps) {
  return (
    <label {...resto} className={cn("text-texto block text-sm font-medium", className)}>
      {children}
      {obrigatorio && (
        <>
          <span aria-hidden="true" className="text-erro ml-0.5">
            *
          </span>
          <span className="sr-only"> (obrigatório)</span>
        </>
      )}
    </label>
  );
}
