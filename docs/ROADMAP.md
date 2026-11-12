# Roadmap

Uma etapa por dia útil, com um commit manual por dia. As datas vão de 06/11/2026 a 06/01/2027.

## Cronograma (41 etapas = 41 commits)

São 41 etapas, não 44, porque 20/11, 25/12 e 01/01 são feriados nacionais.

### Base

| #   | Data  | Etapa                                                                   | Commit sugerido                        | Feito |
| --- | ----- | ----------------------------------------------------------------------- | -------------------------------------- | ----- |
| 1   | 05/11 | Next.js + TS, página mínima, `.gitignore`, README, `CLAUDE.md`, ROADMAP | `chore: configura projeto Next.js`     | [x]   |
| 2   | 09/11 | ESLint, Prettier e scripts                                              | `chore: adiciona lint e formatação`    | [x]   |
| 3   | 10/11 | Tailwind, cores e tipografia                                            | `style: define identidade visual base` | [x]   |
| 4   | 11/11 | `site.ts` com dados de exemplo e metadata base                          | `feat: centraliza dados da empresa`    | [x]   |
| 5   | 12/11 | Cabeçalho com navegação                                                 | `feat: adiciona cabeçalho`             | [ ]   |
| 6   | 13/11 | Menu mobile                                                             | `feat: adiciona menu mobile`           | [ ]   |
| 7   | 16/11 | Rodapé e layout global                                                  | `feat: adiciona rodapé e layout`       | [ ]   |
| 8   | 17/11 | Componentes Button, Container e Section                                 | `feat: cria componentes de layout`     | [ ]   |
| 9   | 18/11 | Componentes Card, Input, Textarea e Label                               | `feat: cria componentes de formulário` | [ ]   |
| 10  | 19/11 | Página 404                                                              | `feat: adiciona página 404`            | [ ]   |

### Início e Sobre

| #   | Data  | Etapa                            | Commit sugerido                      | Feito |
| --- | ----- | -------------------------------- | ------------------------------------ | ----- |
| 11  | 23/11 | Início: destaque principal       | `feat(home): adiciona hero`          | [ ]   |
| 12  | 24/11 | Início: benefícios               | `feat(home): adiciona benefícios`    | [ ]   |
| 13  | 25/11 | Início: como funciona            | `feat(home): adiciona como funciona` | [ ]   |
| 14  | 26/11 | Início: chamada para o simulador | `feat(home): adiciona chamada final` | [ ]   |
| 15  | 27/11 | Sobre: história e missão         | `feat(sobre): adiciona história`     | [ ]   |
| 16  | 30/11 | Sobre: valores e diferenciais    | `feat(sobre): adiciona valores`      | [ ]   |
| 17  | 01/12 | Sobre: categorias de materiais   | `feat(sobre): adiciona categorias`   | [ ]   |

### Simulador

| #   | Data  | Etapa                                            | Commit sugerido                             | Feito |
| --- | ----- | ------------------------------------------------ | ------------------------------------------- | ----- |
| 18  | 02/12 | `calcularEconomia` + Vitest                      | `feat(simulador): cria cálculo de economia` | [ ]   |
| 19  | 03/12 | Configuração do % e formatação em R$, com testes | `feat(simulador): adiciona formatação`      | [ ]   |
| 20  | 04/12 | Página e campo de valor                          | `feat(simulador): cria formulário`          | [ ]   |
| 21  | 07/12 | Exibição do resultado                            | `feat(simulador): exibe resultado`          | [ ]   |
| 22  | 08/12 | Validação e estados de erro                      | `feat(simulador): valida entradas`          | [ ]   |
| 23  | 09/12 | Comparativo visual, aviso e botão de contato     | `feat(simulador): adiciona comparativo`     | [ ]   |

### Contato

| #   | Data  | Etapa                                   | Commit sugerido                          | Feito |
| --- | ----- | --------------------------------------- | ---------------------------------------- | ----- |
| 24  | 10/12 | Página com dados e WhatsApp             | `feat(contato): cria página`             | [ ]   |
| 25  | 11/12 | Formulário com validação                | `feat(contato): adiciona formulário`     | [ ]   |
| 26  | 14/12 | API com validação no servidor           | `feat(contato): cria API`                | [ ]   |
| 27  | 15/12 | Envio de e-mail                         | `feat(contato): envia e-mail`            | [ ]   |
| 28  | 16/12 | Antispam e mensagens de sucesso/erro    | `feat(contato): adiciona antispam`       | [ ]   |
| 29  | 17/12 | Política de privacidade e consentimento | `feat: adiciona política de privacidade` | [ ]   |

### Blog

| #   | Data  | Etapa                                      | Commit sugerido                          | Feito |
| --- | ----- | ------------------------------------------ | ---------------------------------------- | ----- |
| 30  | 18/12 | Leitura dos posts em Markdown, com testes  | `feat(blog): cria leitura de posts`      | [ ]   |
| 31  | 21/12 | Listagem de posts                          | `feat(blog): adiciona listagem`          | [ ]   |
| 32  | 22/12 | Página do post                             | `feat(blog): adiciona página de post`    | [ ]   |
| 33  | 23/12 | Filtro por categoria                       | `feat(blog): adiciona categorias`        | [ ]   |
| 34  | 24/12 | Posts de exemplo e últimos posts na Início | `content(blog): adiciona posts iniciais` | [ ]   |

### Acabamento e publicação

| #   | Data  | Etapa                                    | Commit sugerido                     | Feito |
| --- | ----- | ---------------------------------------- | ----------------------------------- | ----- |
| 35  | 28/12 | Metadata e imagens de compartilhamento   | `feat(seo): adiciona metadata`      | [ ]   |
| 36  | 29/12 | Sitemap, robots e dados estruturados     | `feat(seo): adiciona sitemap`       | [ ]   |
| 37  | 30/12 | Revisão de acessibilidade                | `fix(a11y): corrige acessibilidade` | [ ]   |
| 38  | 31/12 | Desempenho e responsividade              | `perf: otimiza páginas`             | [ ]   |
| 39  | 04/01 | Testes de ponta a ponta (Playwright)     | `test: adiciona testes e2e`         | [ ]   |
| 40  | 05/01 | Deploy de teste e variáveis de ambiente  | `chore: configura deploy`           | [ ]   |
| 41  | 06/01 | Troca do conteúdo real e checklist final | `chore: prepara lançamento`         | [ ]   |

## O que a empresa precisa fornecer

| Prazo     | Item                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| Até 23/11 | Nome, logo, cores, história, contatos e endereço                                                       |
| Até 02/12 | **% de economia real**, com base em dados da empresa, e se ele já desconta a taxa cobrada pela empresa |
| Até 15/12 | E-mail que receberá os contatos; conta no Resend                                                       |
| Até 17/12 | Revisão da política de privacidade por um responsável da empresa                                       |
| Até 24/12 | Revisão ou troca dos posts iniciais                                                                    |
| Até 28/12 | Domínio e escolha da hospedagem                                                                        |

**Bloqueios de lançamento:**

- **% de economia:** o site não entra no ar com o % de exemplo, porque seria uma promessa comercial sem base real.
- **Textos de exemplo:** nenhum texto marcado como exemplo pode ir ao ar.
- **Hospedagem:** o plano gratuito da Vercel é voltado a uso não comercial. Na etapa 40, confirmar os termos atuais e comparar com o plano pago ou outra opção.
