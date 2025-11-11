<!--
  © 2025 Robson Cassiano — MIT License
  This repository is licensed under the MIT License. See the LICENSE file at the repository root for full text.
  Este repositório está licenciado sob a Licença MIT. Consulte o arquivo LICENSE na raiz para o texto completo.
-->

Live Link: https://tryquetra.github.io/balanced-ternary-text-encoder/

# Balanced Ternary Text Encoder / Codificador de Texto Ternário Balanceado

This project is a simple web app that converts text to balanced-ternary code and also decodes ternary back to text. It showcases concepts around ternary efficiency and includes usability features such as quick copy, language switch (PT/EN), and detailed explanations.

Este projeto é uma aplicação web simples que converte texto para um código em ternário balanceado e faz o caminho inverso (ternário → texto). Ele demonstra conceitos de eficiência do sistema ternário e inclui recursos de usabilidade como cópia rápida, alternância de idioma (PT/EN) e explicações detalhadas.

---
## 🇺🇸 English

- Title: Balanced Ternary Text Encoder
- Main tech: HTML, Tailwind via CDN, KaTeX via CDN, Vanilla JS, custom CSS
- Project structure:
  - `index.html` — main page
  - `js/app.js` — app logic and i18n (PT/EN)
  - `css/styles.css` — supplemental styles
  - `robots.txt` — search engine robots configuration
  - `site.webmanifest` — site manifest (optional PWA/install)

### Features
- Encode: Text → Binary → Balanced Ternary
- Decode: Balanced Ternary → Binary → Text
- Size counters (bits/trits)
- Copy-to-clipboard buttons
- Language switcher (PT/EN) with translated strings
- Theory section with KaTeX for formulas
- Expandable detailed explanation

### How to use
1. Open `index.html` in a modern browser (no server required).
2. Type some text and click "Encode" to see binary and ternary outputs.
3. To decode, paste a balanced-ternary code and click "Decode".
4. Use the "EN | PT" button to switch interface language.

Note: the optional content generation feature (Gemini) is disabled by default (empty API key in `app.js`).

### Development
- No build step; everything is static.
- Tailwind and KaTeX are loaded from CDNs.
- Local assets live under `css/` and `js/`.

### License
- © 2025 Robson Cassiano. Licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🇧🇷 Português

Veja funcionando: https://tryquetra.github.io/balanced-ternary-text-encoder/


- Título: Codificador de Texto Ternário Balanceado
- Tecnologias principais: HTML, Tailwind via CDN, KaTeX via CDN, JavaScript vanilla, CSS próprio
- Estrutura do projeto:
  - `index.html` — página principal
  - `js/app.js` — lógica da aplicação e internacionalização (PT/EN)
  - `css/styles.css` — estilos complementares
  - `robots.txt` — configurações para robôs de busca
  - `site.webmanifest` — manifesto do site (PWA/instalação opcional)

### Funcionalidades
- Codificar: Texto → Binário → Ternário balanceado
- Decodificar: Ternário balanceado → Binário → Texto
- Contadores de tamanho (bits/trits)
- Botões de copiar conteúdo
- Alternância de idioma (PT/EN) com textos traduzidos
- Seção de teoria com KaTeX para fórmulas
- Explicação detalhada expansível

### Como usar
1. Abra o arquivo `index.html` em um navegador moderno (não requer servidor).
2. Digite um texto e clique em "Codificar" para ver as saídas em binário e ternário.
3. Para decodificar, cole um código ternário balanceado e clique em "Decodificar".
4. Use o botão "EN | PT" para alternar o idioma da interface.

Observação: a funcionalidade opcional de geração de conteúdo (Gemini) permanece desabilitada por padrão (chave de API vazia no `app.js`).

### Desenvolvimento
- Não há build step; tudo é estático.
- Tailwind e KaTeX são carregados via CDN.
- Os recursos locais estão em `css/` e `js/`.

### Licença
- © 2025 Robson Cassiano. Licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

---
