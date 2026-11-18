import Link from "next/link";
import { navegacao, siteConfig } from "@/config/site";

const { contato, endereco, redesSociais } = siteConfig;

const linkRodape = "text-marca-100 hover:text-white";

/** Telefone em formato aceito pelo link `tel:` (ex.: +5511999999999). */
const telefoneLink = `+55${contato.telefone.replace(/\D/g, "")}`;

const redes = [
  { nome: "Instagram", href: redesSociais.instagram },
  { nome: "Facebook", href: redesSociais.facebook },
].filter((rede): rede is { nome: string; href: string } => Boolean(rede.href));

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-marca-900 text-marca-100 mt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-titulo text-lg font-extrabold text-white">{siteConfig.nome}</p>
          <p className="mt-3 max-w-sm text-sm">{siteConfig.slogan}</p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="font-titulo text-sm font-semibold tracking-wide text-white uppercase">
            Navegação
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkRodape}>
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-titulo text-sm font-semibold tracking-wide text-white uppercase">
            Contato
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              <a href={`https://wa.me/${contato.whatsapp}`} className={linkRodape}>
                WhatsApp
              </a>
            </p>
            <p>
              <a href={`tel:${telefoneLink}`} className={linkRodape}>
                {contato.telefone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contato.email}`} className={`${linkRodape} break-all`}>
                {contato.email}
              </a>
            </p>
            <p>
              {endereco.logradouro} – {endereco.bairro}
              <br />
              {endereco.cidade}/{endereco.estado} – CEP {endereco.cep}
            </p>
          </address>

          {redes.length > 0 && (
            <ul className="mt-4 flex gap-4 text-sm">
              {redes.map((rede) => (
                <li key={rede.nome}>
                  <a
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkRodape}
                  >
                    {rede.nome}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-marca-700 border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs">
          © {ano} {siteConfig.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
