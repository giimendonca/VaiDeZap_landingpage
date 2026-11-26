# Vai De Zap

**Mais autonomia para quem dirige.**

O **Vai De Zap** é uma solução voltada a motoristas particulares. A proposta é facilitar o atendimento pelo WhatsApp, organizar as solicitações de corridas e reunir ferramentas importantes da rotina do motorista em um painel.

🌐 **Acesse o site:** [vaidezap.digimais.tech/home](https://vaidezap.digimais.tech/home)

---

## ✨ Sobre o projeto

Este repositório contém o código-fonte da landing page do Vai De Zap. A página apresenta a proposta do sistema, explica seu funcionamento e destaca os principais recursos e benefícios para motoristas particulares.

## 🚘 O que o Vai De Zap apresenta

- **Atendimento pelo WhatsApp:** recebimento automatizado de solicitações dos clientes.
- **Cotação de corridas:** apresentação de valores com base nas tarifas configuradas.
- **Localização:** recursos de geolocalização para acompanhar informações das corridas.
- **Painel de solicitações:** visualização das corridas recebidas e notificações sonoras.
- **Gestão de tarifas:** configuração dos valores utilizados na precificação.
- **Acesso pelo celular:** interface adaptada para dispositivos móveis.
- **Segurança e controle de custos:** proteção relacionada ao acesso à API de mapas.

## 🧰 Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| [React](https://react.dev/) | Construção da interface por componentes |
| [Vite](https://vite.dev/) | Ambiente de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização da interface |
| [Lucide React](https://lucide.dev/) | Ícones |

## 🎨 Interface

A landing page conta com:

- Layout responsivo, pensado para diferentes tamanhos de tela.
- Tema claro e tema escuro, com preferência salva no navegador.
- Componentes reutilizáveis.
- Navegação por seções da página.
- Animações e elementos visuais para destacar informações.

## ▶️ Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm (incluído na instalação do Node.js).

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/giimendonca/VaiDeZap_landingpage.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd VaiDeZap_landingpage
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço local exibido pelo Vite no terminal.

## 📦 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Executa uma prévia da build |
| `npm run lint` | Executa a análise estática com Oxlint |

## 📁 Organização do projeto

```text
src/
├── components/
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── ThemeToggle.jsx
├── sections/
│   ├── Benefits.jsx
│   ├── CallToAction.jsx
│   ├── Features.jsx
│   ├── Hero.jsx
│   ├── HowItWorks.jsx
│   └── Security.jsx
├── App.jsx
├── index.css
└── main.jsx
public/
└── logo.png
```

## 🔗 Links

- **Site:** [https://vaidezap.digimais.tech/home](https://vaidezap.digimais.tech/home)
- **Repositório:** [github.com/giimendonca/VaiDeZap_landingpage](https://github.com/giimendonca/VaiDeZap_landingpage)

---

<p align="center">
  Desenvolvido com 💚 para dar mais autonomia a quem dirige.
</p>
