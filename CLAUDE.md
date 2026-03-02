# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o Projeto

Landing page para o programa **Despertar — O Retorno Consciente** por Andreia Davlia (Psique Profunda). Projeto de desenvolvimento emocional voltado para mulheres. Linguagem sensível, empática e profissional — nunca clínica ou invasiva.

## Status Atual

Projeto em fase inicial. O diretório `refs/` contém materiais de referência:
- `refs/despertar-—-andreia-davlia/` — App de referência exportado do Google AI Studio (protótipo da landing page)
- `refs/imagens/` — Assets visuais da Andreia (PNGs: abraco, apoio, grupo-celebracao, juntas, maos)

## Stack de Referência

O protótipo em `refs/` usa:
- **React 19** + **Vite 6** (módulos ESM)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, sem `tailwind.config` — configuração via `@theme` no CSS)
- **Motion** (framer-motion v12+, import de `motion/react`)
- **Lucide React** para ícones
- **TypeScript 5.8** — verificação com `npx tsc --noEmit`
- Path alias `@/*` mapeado para a raiz do projeto

## Design System (Tokens de Referência)

Definidos via `@theme` no `index.css`:

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-serif` | Cormorant Garamond | Títulos, destaques itálicos |
| `--font-sans` | DM Sans | Corpo, labels |
| `--color-bg-primary` | #FAF8F5 | Fundo principal (off-white quente) |
| `--color-bg-secondary` | #F0EBE3 | Fundo alternado entre seções |
| `--color-accent` | #7A8B6F | Verde sage — CTAs, destaques |
| `--color-accent-hover` | #6B7A60 | Hover dos botões |
| `--color-detail` | #8B7355 | Detalhes e elementos complementares |
| `--color-text-primary` | #1A1A1A | Títulos |
| `--color-text-body` | #4A4A4A | Texto corrido |
| `--color-text-muted` | #8A8A8A | Texto secundário |

Classes utilitárias de referência: `.section-spacing`, `.max-text-width`, `.btn-primary`, `.serif-italic`, `.label-uppercase`

## Comandos (ref app)

```bash
cd refs/despertar-—-andreia-davlia
npm install
npm run dev        # Vite dev server na porta 3000
npm run build      # Build de produção
npm run lint       # tsc --noEmit
```

Requer `GEMINI_API_KEY` em `.env.local` (ver `.env.example`).

## Convenções

- Todo conteúdo textual em **Português Brasileiro**
- Tom editorial: empático, firme, sem promessas mágicas — alinhado ao posicionamento da mentora
- Seções da landing page seguem fluxo de copywriting: Hero → Dor/Identificação → Transformação → Método → Funcionamento → Mentora → Prova Social → CTA → Fechamento
