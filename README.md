# Templates VncsRaniery

Uma ferramenta completa para inicializar projetos Next.js com templates personalizados e modernos. Desenvolvido com as melhores práticas de desenvolvimento web e uma interface elegante e responsiva.

[![npm version](https://img.shields.io/npm/v/create-templates-vncsraniery.svg)](https://www.npmjs.com/package/create-templates-vncsraniery)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Uso](#instalação-e-uso)
- [Templates Disponíveis](#templates-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Comandos Disponíveis](#comandos-disponíveis)
- [Desenvolvimento](#desenvolvimento)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

O **Templates VncsRaniery** é uma ferramenta CLI (Command Line Interface) que permite criar projetos Next.js rapidamente usando templates pré-configurados e otimizados. A ferramenta oferece uma experiência de desenvolvimento moderna com componentes reutilizáveis, animações fluidas e uma arquitetura bem estruturada.

### Principais Destaques

- **Inicialização Rápida**: Crie projetos Next.js em segundos
- **Templates Modernos**: Design elegante com animações e efeitos visuais
- **Totalmente Responsivo**: Adaptável a todos os dispositivos
- **Suporte a Temas**: Tema claro e escuro integrados
- **Performance Otimizada**: Carregamento rápido e otimizações avançadas
- **Acessibilidade**: Componentes acessíveis seguindo as melhores práticas
- **TypeScript**: Tipagem forte para maior segurança e produtividade
- **Múltiplos Templates**: Diferentes opções para diferentes necessidades

## Características

### Interface e UX
- Design moderno e minimalista
- Animações fluidas com Framer Motion
- Efeitos visuais interativos (Magic Cards, Badges animados)
- Gradientes e efeitos de glassmorphism
- Navegação intuitiva com scroll suave
- Sistema de cores personalizável

### Responsividade
- Mobile-first approach
- Breakpoints otimizados para todos os dispositivos
- Menu mobile com animações
- Layout adaptativo e flexível

### Sistema de Temas
- Suporte completo para tema claro e escuro
- Transições suaves entre temas
- Persistência da preferência do usuário
- Cores customizáveis via CSS variables

### Performance
- Next.js 15 com Turbopack
- Otimizações de imagem automáticas
- Lazy loading de componentes
- Bundle splitting otimizado
- Tree shaking automático

## Tecnologias Utilizadas

### Core
- **[Next.js 15.5.3](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://react.dev/)** - Biblioteca de interface
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática

### Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animações CSS
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas

### Componentes e UI
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[Framer Motion](https://www.framer.com/motion/)** - Animações avançadas

### Utilitários
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes

### CLI
- **[degit](https://github.com/Rich-Harris/degit)** - Download de templates
- **[prompts](https://github.com/terkelg/prompts)** - Interface interativa
- **[chalk](https://github.com/chalk/chalk)** - Cores no terminal

## Instalação e Uso

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14.0.0 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Git**

### Instalação Global (Opcional)

```bash
npm install -g create-templates-vncsraniery
```

### Uso com npx (Recomendado)

```bash
# Modo interativo
npx create-templates-vncsraniery@latest

# Comando direto
npx create-templates-vncsraniery@latest add landing-01 meu-projeto

# Baixar para pasta atual
npx create-templates-vncsraniery@latest add landing-01 ./
```

### Exemplos de Uso

```bash
# Criar novo projeto
npx create-templates-vncsraniery@latest add landing-01 meu-site

# Adicionar template a projeto existente
npx create-templates-vncsraniery@latest add landing-01 ./

# Listar templates disponíveis
npx create-templates-vncsraniery@latest list

# Mostrar ajuda
npx create-templates-vncsraniery@latest help
```

## Templates Disponíveis

### Landing Page 01

**Valor**: `landing-01`

Um template completo de landing page com design moderno e responsivo.

**Características**:
- Design elegante com animações fluidas
- Sistema de temas (claro/escuro)
- Componentes interativos (Magic Cards, Badges)
- Navegação responsiva
- Seções otimizadas para conversão
- Performance otimizada

**Tecnologias**:
- Next.js 15 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI

### E-commerce Template

**Valor**: `ecommerce-01` *(Em breve)*

Template completo para lojas virtuais com funcionalidades de e-commerce.

**Características**:
- Catálogo de produtos
- Carrinho de compras
- Sistema de pagamento
- Painel administrativo
- Gestão de estoque

### Blog Template

**Valor**: `blog-01` *(Em breve)*

Template otimizado para blogs e sites de conteúdo.

**Características**:
- Sistema de posts
- Categorias e tags
- Busca avançada
- SEO otimizado
- Comentários

### Dashboard Template

**Valor**: `dashboard-01` *(Em breve)*

Template para painéis administrativos e dashboards.

**Características**:
- Gráficos interativos
- Tabelas de dados
- Filtros avançados
- Autenticação
- Responsivo

## Estrutura do Projeto

```
templates/
├── index.js                     # CLI principal
├── package.json                 # Configurações do CLI
├── templates/                   # Templates disponíveis
│   ├── landing-01/             # Template Landing Page
│   ├── ecommerce-01/           # Template E-commerce (em breve)
│   ├── blog-01/                # Template Blog (em breve)
│   └── dashboard-01/           # Template Dashboard (em breve)
└── website/                    # Site de documentação
    ├── app/                    # App Router
    ├── public/                 # Arquivos estáticos
    └── package.json            # Dependências do site

# Estrutura de cada template:
template-exemplo/
├── app/                        # App Router do Next.js
│   ├── (marketing)/           # Grupo de rotas
│   │   ├── layout.tsx         # Layout específico
│   │   └── page.tsx           # Página inicial
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout raiz
│   └── favicon.ico            # Ícone do site
├── components/                 # Componentes reutilizáveis
│   ├── global/                # Componentes globais
│   ├── navigation/            # Navegação
│   ├── ui/                    # Componentes de interface
│   └── theme-toggle.tsx
├── lib/                       # Utilitários
├── providers/                 # Providers do React
├── public/                    # Arquivos estáticos
├── utils/                     # Constantes e configurações
├── components.json            # Configuração shadcn/ui
├── next.config.ts             # Configuração Next.js
├── tailwind.config.js         # Configuração Tailwind
├── tsconfig.json              # Configuração TypeScript
└── package.json               # Dependências
```

## Comandos Disponíveis

### `add <template> [destino]`

Adiciona um template específico ao projeto.

```bash
# Criar novo projeto
npx create-templates-vncsraniery@latest add landing-01 meu-projeto

# Adicionar à pasta atual
npx create-templates-vncsraniery@latest add landing-01 ./
```

### `list`

Lista todos os templates disponíveis.

```bash
npx create-templates-vncsraniery@latest list
```

### `help`

Mostra informações de ajuda e exemplos de uso.

```bash
npx create-templates-vncsraniery@latest help
```

## Desenvolvimento

### Configuração do Ambiente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/VncsRaniery/templates.git
   cd templates
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   # Site de documentação
   npm run dev

   # Ou para um template específico
   cd templates/landing-01
   npm run dev
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o site de documentação

# Build
npm run build        # Cria build de produção do site
npm run start        # Inicia servidor de produção

# Para templates individuais
cd templates/landing-01
npm run dev          # Desenvolvimento do template
npm run build        # Build do template
npm run start        # Produção do template
npm run lint         # Linting
```

### Adicionando Novos Templates

1. Crie uma nova pasta em `templates/`
2. Configure o template com Next.js
3. Adicione o template ao array `AVAILABLE_TEMPLATES` em `index.js`
4. Teste a instalação

### Estrutura de um Template

```
template-exemplo/
├── app/                    # App Router
├── components/             # Componentes
├── lib/                    # Utilitários
├── public/                 # Arquivos estáticos
├── package.json            # Dependências
├── next.config.ts          # Configuração Next.js
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Documentação do template
```

## Personalização

### Modificando Cores

As cores podem ser personalizadas no arquivo `app/globals.css`:

```css
:root {
  --primary: oklch(0.7 0.15 200);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  /* ... outras cores */
}
```

### Adicionando Novos Componentes

1. Crie o componente na pasta `components/`
2. Exporte o componente
3. Importe onde necessário
4. Documente o uso

### Configuração do Tailwind

O Tailwind está configurado com:
- Cores customizadas
- Fontes personalizadas
- Animações customizadas
- Breakpoints responsivos
- Plugins adicionais

## Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku
- DigitalOcean

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Diretrizes de Contribuição

- Siga o padrão de código existente
- Adicione testes quando apropriado
- Atualize a documentação
- Use commits descritivos
- Mantenha a compatibilidade com versões anteriores

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Desenvolvedor

**VncsRaniery**
- GitHub: [@VncsRaniery](https://github.com/VncsRaniery)
- NPM: [create-templates-vncsraniery](https://www.npmjs.com/package/create-templates-vncsraniery)

## Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design
- [Radix UI](https://www.radix-ui.com/) pelos componentes acessíveis
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [Lucide](https://lucide.dev/) pelos ícones
- [Vercel](https://vercel.com/) pela plataforma de deploy

## Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Radix UI](https://www.radix-ui.com/docs)
- [Documentação do Framer Motion](https://www.framer.com/motion/)

---

Se este projeto foi útil para você, considere dar uma estrela no repositório!
