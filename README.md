# Site de compras de materiais de obra

Site institucional com páginas sobre a empresa, contato, mini blog e simulador de economia.

## Como rodar

Requer Node.js 22 ou mais recente.

```
npm install
npm run dev
```

Depois, abra http://localhost:3000.

## Comandos

| Comando                | Função                                   |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Inicia o site em modo de desenvolvimento |
| `npm run build`        | Gera a versão de produção                |
| `npm run start`        | Roda a versão de produção já gerada      |
| `npm run lint`         | Verifica o código com o ESLint           |
| `npm run format`       | Formata os arquivos com o Prettier       |
| `npm run format:check` | Confere se os arquivos estão formatados  |

## TypeScript

O pacote `typescript` aponta para o TypeScript 6 (`@typescript/typescript6`), porque o ESLint ainda não funciona com o TypeScript 7. O TypeScript 7 fica instalado como `@typescript/native`.

## Andamento

O cronograma e o que falta fazer estão em [docs/ROADMAP.md](docs/ROADMAP.md).
