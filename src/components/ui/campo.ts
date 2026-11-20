import { cn } from "@/lib/cn";

/** Classes compartilhadas por Input e Textarea. */
export function classesCampo(invalido: boolean, className?: string): string {
  return cn(
    "bg-fundo text-texto placeholder:text-texto-suave/70 mt-1 block w-full rounded-md border px-3 py-2 text-base shadow-sm transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-0",
    "disabled:bg-fundo-suave disabled:cursor-not-allowed disabled:opacity-70",
    invalido
      ? "border-erro focus-visible:outline-erro"
      : "border-borda hover:border-marca-200 focus-visible:border-marca-500 focus-visible:outline-marca-500",
    className,
  );
}
