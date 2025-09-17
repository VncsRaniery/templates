# Landing Page 01 - VncsRaniery

Esse é um template de Landing Page - 01 completo para projetos Next.js, desenvolvido com as melhores práticas de desenvolvimento web e uma interface elegante e responsiva.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Configuração](#configuração)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Personalização](#personalização)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

A **Landing Page - 01** é uma base sólida para desenvolvimento de aplicações web modernas, construído com Next.js 15 e React 19. Este template oferece uma estrutura bem organizada, componentes reutilizáveis e uma experiência de desenvolvimento otimizada.

### Principais Destaques

- **Design Moderno**: Interface elegante com animações suaves e efeitos visuais impressionantes
- **Totalmente Responsivo**: Adaptável a todos os dispositivos e tamanhos de tela
- **Tema Escuro/Claro**: Suporte completo para alternância de temas
- **Performance Otimizada**: Carregamento rápido e otimizações de performance
- **Acessibilidade**: Componentes acessíveis seguindo as melhores práticas
- **TypeScript**: Tipagem forte para maior segurança e produtividade

## Características

### Interface e UX
- Design moderno e minimalista
- Animações fluidas com Framer Motion
- Efeitos visuais interativos (Magic Cards, Badges animados)
- Gradientes e efeitos de glassmorphism
- Navegação intuitiva com scroll suave

### Responsividade
- Mobile-first approach
- Breakpoints otimizados para todos os dispositivos
- Menu mobile com animações
- Layout adaptativo

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

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.17 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Git**

## Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/VncsRaniery/templates.git
   cd templates
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra no navegador**
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## Estrutura do Projeto

```
template-global/
├── app/                          # App Router do Next.js
│   ├── (marketing)/             # Grupo de rotas de marketing
│   │   ├── layout.tsx           # Layout específico do marketing
│   │   └── page.tsx             # Página inicial
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz
│   └── favicon.ico              # Ícone do site
├── components/                   # Componentes reutilizáveis
│   ├── global/                  # Componentes globais
│   │   ├── animation-container.tsx
│   │   └── max-width-wrapper.tsx
│   ├── navigation/              # Componentes de navegação
│   │   ├── footer.tsx
│   │   ├── mobile-navbar.tsx
│   │   └── navbar.tsx
│   ├── ui/                      # Componentes de interface
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── magic-badge.tsx
│   │   ├── magic-card.tsx
│   │   └── sheet.tsx
│   └── theme-toggle.tsx         # Toggle de tema
├── lib/                         # Utilitários e configurações
│   └── utils.ts                 # Funções utilitárias
├── providers/                   # Providers do React
│   ├── index.tsx                # Provider principal
│   └── theme-provider.tsx       # Provider de tema
├── public/                      # Arquivos estáticos
│   ├── *.svg                    # Ícones e imagens
├── utils/                       # Constantes e configurações
│   ├── constants/
│   │   ├── navbar-links.tsx     # Links de navegação
│   │   └── recursos.ts          # Dados dos recursos
│   └── index.ts                 # Exportações
├── components.json              # Configuração do shadcn/ui
├── next.config.ts               # Configuração do Next.js
├── tailwind.config.js           # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
└── package.json                 # Dependências e scripts
```

## Componentes

### Componentes Globais

#### `AnimationContainer`
Componente wrapper para animações com Framer Motion.

```tsx
<AnimationContainer delay={0.2} className="custom-class">
  <div>Conteúdo animado</div>
</AnimationContainer>
```

#### `MaxWidthWrapper`
Wrapper responsivo com largura máxima e padding lateral.

```tsx
<MaxWidthWrapper className="py-10">
  <div>Conteúdo centralizado</div>
</MaxWidthWrapper>
```

### Componentes de UI

#### `MagicCard`
Card interativo com efeito de gradiente que segue o mouse.

```tsx
<MagicCard
  gradientFrom="#38bdf8"
  gradientTo="#3b82f6"
  gradientColor="rgba(59,130,246,0.1)"
  className="p-6"
>
  <div>Conteúdo do card</div>
</MagicCard>
```

#### `MagicBadge`
Badge animado com efeito de rotação.

```tsx
<MagicBadge title="Novo" />
```

#### `Button`
Botão customizável com variantes.

```tsx
<Button variant="default" size="lg">
  Clique aqui
</Button>
```

### Componentes de Navegação

#### `Navbar`
Barra de navegação responsiva com scroll detection.

#### `MobileNavbar`
Menu mobile com animações.

#### `Footer`
Rodapé com links e informações.

## Configuração

### Personalização de Cores

As cores podem ser personalizadas no arquivo `app/globals.css`:

```css
:root {
  --primary: oklch(0.7 0.15 200);
  --primary-foreground: oklch(0.98 0 0);
  /* ... outras cores */
}
```

### Configuração do Tailwind

O Tailwind está configurado no `tailwind.config.js` com suporte a:
- Cores customizadas
- Fontes personalizadas
- Animações customizadas
- Breakpoints responsivos

### Configuração do TypeScript

O TypeScript está configurado com:
- Strict mode habilitado
- Path mapping para imports
- Tipos do Next.js incluídos

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Linting
npm run lint         # Executa o ESLint
```

## Personalização

### Adicionando Novas Páginas

1. Crie um novo arquivo na pasta `app/`
2. Exporte um componente React como default
3. A rota será criada automaticamente

### Adicionando Novos Componentes

1. Crie o componente na pasta `components/`
2. Exporte o componente
3. Importe onde necessário

### Modificando o Tema

1. Edite as variáveis CSS em `app/globals.css`
2. Ajuste as cores no `tailwind.config.js`
3. Teste a alternância entre temas

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

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Desenvolvedor

**VncsRaniery**
- GitHub: [@VncsRaniery](https://github.com/VncsRaniery)

## Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Tailwind CSS](https://tailwindcss.com/) pelo sistema de design
- [Radix UI](https://www.radix-ui.com/) pelos componentes acessíveis
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [Lucide](https://lucide.dev/) pelos ícones

---

Se este projeto foi útil para você, considere dar uma estrela no repositório!