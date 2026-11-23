import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/config/home";

/** Destaque principal da página Início. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="from-marca-50 to-fundo bg-linear-to-b py-20 sm:py-28"
    >
      <Container className="max-w-4xl text-center">
        <p className="bg-marca-100 text-marca-700 inline-block rounded-full px-4 py-1 text-sm font-semibold">
          {hero.selo}
        </p>

        <h1 id="hero-titulo" className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {hero.titulo}
        </h1>

        <p className="text-texto-suave mx-auto mt-6 max-w-2xl text-lg sm:text-xl">
          {hero.descricao}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={hero.chamadaPrincipal.href} tamanho="lg">
            {hero.chamadaPrincipal.rotulo}
          </Button>
          <Button href={hero.chamadaSecundaria.href} variante="contorno" tamanho="lg">
            {hero.chamadaSecundaria.rotulo}
          </Button>
        </div>

        <ul className="text-texto-suave mt-10 flex flex-col justify-center gap-x-8 gap-y-3 text-sm sm:flex-row">
          {hero.destaques.map((destaque) => (
            <li key={destaque} className="flex items-center justify-center gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-economia-600 h-5 w-5 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
                  clipRule="evenodd"
                />
              </svg>
              {destaque}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
