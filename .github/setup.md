# Configuração do GitHub Actions

Este documento explica como configurar os secrets necessários para o workflow de CI/CD.

## Secrets Necessários

### 1. NPM_TOKEN

Para publicar o package no NPM, você precisa configurar um token de autenticação.

#### Como obter o token:

1. Acesse [npmjs.com](https://www.npmjs.com) e faça login
2. Vá para **Account Settings** > **Access Tokens**
3. Clique em **Generate New Token**
4. Selecione **Automation** como tipo de token
5. Copie o token gerado

#### Como configurar no GitHub:

1. Vá para o repositório no GitHub
2. Clique em **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret**
4. Nome: `NPM_TOKEN`
5. Valor: Cole o token do NPM
6. Clique em **Add secret**

### 2. GITHUB_TOKEN

Este token é automaticamente fornecido pelo GitHub e não precisa ser configurado manualmente.

## Como o Workflow Funciona

### Build Website (Sempre executado)
- Executa em push e pull requests para a branch main
- Usa Node.js 20 e npm mais recente
- Instala dependências do projeto website
- Executa linting
- Faz o build do website
- Salva os artefatos de build

### Publish Package (Push para main ou tags v*)
- Executa quando há push para a branch main OU quando há push de tags que começam com 'v'
- Atualiza npm para a versão mais recente
- Executa build e testes do package
- Verifica se há mudanças nos arquivos do package (apenas para push em branch)
- Publica o package no NPM
- Cria uma release no GitHub

## Estrutura do Workflow

```yaml
on:
  push:
    branches: [main]        # Executa em push para main
    tags: ['v*']           # Executa em push de tags v*
  pull_request:
    branches: [main]        # Executa em PRs para main

permissions:
  id-token: write          # Necessário para OIDC
  contents: read

jobs:
  build-website:           # Job 1: Build do website
  publish-package:         # Job 2: Publish do package (push main ou tags v*)
```

## Troubleshooting

### Erro de autenticação NPM
- Verifique se o `NPM_TOKEN` está configurado corretamente
- Confirme se o token tem permissões de publicação
- Verifique se o package name está disponível no NPM

### Build falha
- Verifique se todas as dependências estão no package.json
- Confirme se o Node.js versão 18 está sendo usado
- Verifique os logs de build para erros específicos

### Package não é publicado
- O workflow só publica se houver mudanças nos arquivos do package
- Verifique se você está fazendo push para a branch main
- Confirme se o build do website passou com sucesso
