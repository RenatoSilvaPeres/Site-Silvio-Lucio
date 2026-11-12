/**
 * Dados centrais da empresa, usados em todo o site.
 *
 * ATENÇÃO: todos os valores abaixo são DE EXEMPLO. Eles serão trocados pelos
 * dados reais na etapa 41 do ROADMAP. O site não pode ir ao ar enquanto
 * `exemplo` for `true`.
 */

export type SiteConfig = {
  /** Indica que os dados ainda são de exemplo e precisam ser trocados. */
  exemplo: boolean;
  nome: string;
  slogan: string;
  descricao: string;
  /** Endereço público do site, sem barra no final. */
  url: string;
  contato: {
    email: string;
    /** Telefone no formato de exibição. */
    telefone: string;
    /** Número do WhatsApp só com dígitos, com DDI e DDD (ex.: 5511999999999). */
    whatsapp: string;
  };
  endereco: {
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  redesSociais: {
    instagram?: string;
    facebook?: string;
  };
};

export const siteConfig: SiteConfig = {
  exemplo: true,
  nome: "Obra Compras (exemplo)",
  slogan: "Compramos os materiais da sua obra pelo melhor preço.",
  descricao:
    "Texto de exemplo: cuidamos da cotação e da compra dos materiais da sua obra para você economizar tempo e dinheiro.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contato: {
    email: "contato@exemplo.com.br",
    telefone: "(11) 99999-9999",
    whatsapp: "5511999999999",
  },
  endereco: {
    logradouro: "Rua de Exemplo, 123",
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    cep: "00000-000",
  },
  redesSociais: {
    instagram: "https://www.instagram.com/exemplo",
  },
};
