# 🌿 Equilíbrio Sustentável

Landing page informativa e responsiva sobre os Indicadores de Desenvolvimento Sustentável (IDS) do IBGE, alinhados à Agenda 2030 da ONU.

---

## Sobre o Projeto

Landing page informativa e responsiva sobre os Indicadores de Desenvolvimento Sustentável (IDS) do IBGE. O projeto visa educar e conscientizar sobre as métricas que monitoram o progresso do Brasil em direção a um futuro equilibrado, alinhado com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU.

---

## Tecnologias

- **HTML5** — Estrutura semântica e acessível
- **CSS3** — Variáveis CSS, Flexbox, Grid, animações `@keyframes` e design responsivo
- **JavaScript Vanilla** — Scroll suave e `IntersectionObserver` para animações de entrada
- **Fontes** — Inter via CDN (`@fontsource/inter`)

> Sem frameworks ou dependências de build. Basta abrir no navegador.

---

## Estrutura de Arquivos

```
equilíbrio-sustentável/
├── index.html   → Estrutura semântica da página (Hero, Seções, Footer)
├── style.css    → Estilos, variáveis de cor, animações e responsividade
├── script.js    → Scroll suave e IntersectionObserver para animações
└── README.md    → Documentação do projeto
```

---

## Como Usar

1. Salve os 4 arquivos na **mesma pasta**
2. Abra `index.html` em qualquer navegador moderno
3. Nenhuma instalação ou servidor local necessário

---

## Estrutura da Página

| Seção | Descrição |
|---|---|
| **Hero** | Banner com badge IBGE, título, descrição e botão CTA |
| **O que são os IDS?** | Explicação sobre o IBGE desde 2002 e a Agenda 2030 |
| **As 4 Dimensões** | Grid com cards: Ambiental, Social, Econômico, Institucional |
| **Citação Brundtland** | Box de destaque com definição clássica de 1987 |
| **Footer** | Créditos ao IBGE, ONU e ODS |

---

## Design

- **Paleta**: Tons de verde (`#1a4a2e`, `#2d6a4f`, `#52b788`) + bege (`#f0ede6`)
- **Tipografia**: Inter com `clamp()` para escalonamento fluido
- **Animações**: `@keyframes fadeInUp` nos cards (delays 0.1s–0.4s) e `IntersectionObserver` nas seções de texto
- **Responsividade**: Breakpoints em `768px` e `480px`

---

## Fontes e Referências

- [IBGE — Indicadores de Desenvolvimento Sustentável](https://www.ibge.gov.br)
- [ONU — Agenda 2030 / ODS](https://brasil.un.org/pt-br/sdgs)
- [Relatório Brundtland, "Nosso Futuro Comum" (1987)](https://documents.un.org/doc/undoc/gen/n87/184/67/pdf/n8718467.pdf)
