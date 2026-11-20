/** Junta classes CSS, ignorando valores vazios (false, null, undefined, ""). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
