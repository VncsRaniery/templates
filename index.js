#!/usr/bin/env node

const degit = require("degit");
const prompts = require("prompts");
const path = require("path");
const chalk = require("chalk");
const fs = require("fs");

// A URL do seu repositório de template
const TEMPLATE_URL = "VncsRaniery/template-global";

// Templates disponíveis
const AVAILABLE_TEMPLATES = [
  {
    title: "Template 01 - Landing Page",
    description:
      "Template completo com Next.js, Tailwind CSS e componentes personalizados para landing page",
    value: "landing-01",
    folder: "landing-01",
  },
];

// Arquivos que devem ser ignorados ao copiar o template
const IGNORED_FILES = [
  'index.js',
  'README.md',
  'package.json',
  'package-lock.json',
  '.gitignore',
  'node_modules',
  '.git',
  '.github',
  'templates',
  'website'
];

// Função para detectar se está em uma pasta existente
function isInExistingProject() {
  const currentDir = process.cwd();
  const packageJsonPath = path.join(currentDir, "package.json");
  return fs.existsSync(packageJsonPath);
}

// Função para parsear argumentos da linha de comando
function parseArgs(args) {
  const result = {
    mode: 'interactive',
    template: null,
    destination: null,
    usingCurrentDir: false
  };

  if (args.length === 0) {
    return result;
  }

  const command = args[0].toLowerCase();
  
  // Comandos especiais
  if (command === "help" || command === "--help" || command === "-h") {
    result.mode = 'help';
    return result;
  }
  
  if (command === "list" || command === "--list" || command === "-l") {
    result.mode = 'list';
    return result;
  }
  
  if (command === "add") {
    if (args.length < 2) {
      result.mode = 'error';
      result.error = "Template não especificado.";
      result.suggestion = "Use: npx create-template-vncsraniery@latest add <template> [destino]";
      return result;
    }
    
    result.mode = 'install';
    result.template = args[1];
    result.destination = args[2] || "";
    
    // Verifica se o destino é './'
    if (result.destination === "./" || result.destination === ".\\") {
      result.usingCurrentDir = true;
    }
    
    return result;
  }

  // Modo legado (template como primeiro argumento)
  result.mode = 'install';
  result.template = args[0];
  result.destination = args[1] || "";
  
  // Verifica se o destino é './'
  if (result.destination === "./" || result.destination === ".\\") {
    result.usingCurrentDir = true;
  }
  
  return result;
}

// Função para listar templates disponíveis
function listTemplates() {
  console.log(chalk.bold.rgb(5, 150, 255)("📋 Templates disponíveis:\n"));
  
  AVAILABLE_TEMPLATES.forEach((template, index) => {
    console.log(chalk.cyan(`${index + 1}. ${template.title}`));
    console.log(chalk.gray(`   Valor: ${template.value}`));
    console.log(chalk.gray(`   ${template.description}\n`));
  });
  
  console.log(chalk.yellow("💡 Exemplos de uso:"));
  console.log(chalk.gray("   npx create-template-vncsraniery@latest add landing-01"));
  console.log(chalk.gray("   npx create-template-vncsraniery@latest add landing-01 ./"));
  console.log(chalk.gray("   npx create-template-vncsraniery@latest add landing-01 meu-projeto"));
}

// Função para mostrar ajuda
function showHelp() {
  console.log(chalk.bold.rgb(5, 150, 255)("🚀 Criador de Template VncsRaniery - Ajuda\n"));
  
  console.log(chalk.bold("📖 Comandos disponíveis:"));
  console.log(chalk.cyan("  add <template> [destino]"));
  console.log(chalk.gray("     Adiciona um template específico ao projeto"));
  console.log(chalk.cyan("  list"));
  console.log(chalk.gray("     Lista todos os templates disponíveis"));
  console.log(chalk.cyan("  help"));
  console.log(chalk.gray("     Mostra esta mensagem de ajuda\n"));
  
  console.log(chalk.bold("📝 Exemplos de uso:"));
  console.log(chalk.gray("  # Baixar template para nova pasta:"));
  console.log(chalk.cyan("  npx create-template-vncsraniery@latest add landing-01 meu-projeto"));
  console.log(chalk.gray("  # Baixar template para pasta atual:"));
  console.log(chalk.cyan("  npx create-template-vncsraniery@latest add landing-01 ./"));
  console.log(chalk.gray("  # Listar templates disponíveis:"));
  console.log(chalk.cyan("  npx create-template-vncsraniery@latest list"));
  console.log(chalk.gray("  # Modo interativo (sem argumentos):"));
  console.log(chalk.cyan("  npx create-template-vncsraniery@latest\n"));
  
  console.log(chalk.bold("🎯 Templates disponíveis:"));
  AVAILABLE_TEMPLATES.forEach((template) => {
    console.log(chalk.cyan(`  • ${template.value}`));
    console.log(chalk.gray(`    ${template.title}`));
  });
}

// Função para verificar se um arquivo deve ser ignorado
function shouldIgnoreFile(fileName) {
  return IGNORED_FILES.includes(fileName) || 
         fileName.startsWith('.') && !fileName.startsWith('.next') ||
         fileName === 'next.config.js' ||
         fileName === 'next.config.ts' ||
         fileName === 'tsconfig.json' ||
         fileName === 'eslint.config.mjs' ||
         fileName === 'postcss.config.mjs';
}

// Função para copiar arquivos recursivamente (apenas arquivos do template)
function copyRecursive(src, dest, options = {}) {
  const { overwrite = false, verbose = false } = options;
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
      if (verbose) {
        console.log(chalk.gray(`📁 Criando diretório: ${path.basename(dest)}`));
      }
    }
    const files = fs.readdirSync(src);
    files.forEach((file) => {
      // Verificar se o arquivo deve ser ignorado
      if (!shouldIgnoreFile(file)) {
        copyRecursive(path.join(src, file), path.join(dest, file), options);
      }
    });
  } else {
    // Verificar se o arquivo deve ser ignorado
    if (!shouldIgnoreFile(path.basename(src))) {
      // Verificar se o arquivo de destino já existe
      if (fs.existsSync(dest)) {
        if (!overwrite) {
          console.log(chalk.yellow(`⚠️  Arquivo já existe: ${path.basename(dest)}`));
          console.log(chalk.gray(`   Caminho: ${dest}`));
          console.log(chalk.gray(`   Use --force para sobrescrever arquivos existentes`));
          return;
        } else {
          console.log(chalk.yellow(`🔄 Sobrescrevendo: ${path.basename(dest)}`));
        }
      } else if (verbose) {
        console.log(chalk.gray(`📄 Copiando: ${path.basename(dest)}`));
      }
      fs.copyFileSync(src, dest);
    }
  }
}

// Função unificada para instalar template
async function installTemplate(templateValue, destination, options = {}) {
  const { overwrite = false, verbose = false } = options;
  
  // Encontrar o template
  const selectedTemplate = AVAILABLE_TEMPLATES.find(
    (t) => t.value === templateValue
  );
  
  if (!selectedTemplate) {
    throw new Error(`Template "${templateValue}" não encontrado.`);
  }

  const tempDir = path.join(process.cwd(), ".temp-template-download");
  const templateSourceDir = path.join(
    tempDir,
    "templates",
    selectedTemplate.folder
  );

  try {
    console.log(
      chalk.yellow(
        `\n📦 Baixando template "${selectedTemplate.title}"...`
      )
    );

    const emitter = degit(TEMPLATE_URL, {
      cache: false,
      force: true,
      verbose: false,
    });

    await emitter.clone(tempDir);

    if (!fs.existsSync(templateSourceDir)) {
      throw new Error(
        `Template "${selectedTemplate.folder}" não encontrado no repositório`
      );
    }

    console.log(chalk.blue("📋 Copiando arquivos do template..."));

    // Verificar se o destino já existe (apenas para novos projetos)
    if (destination && !isInExistingProject()) {
      if (fs.existsSync(destination)) {
        throw new Error(
          `A pasta "${destination}" já existe. Por favor, remova-a ou escolha outro nome.`
        );
      }
      fs.mkdirSync(destination, { recursive: true });
    }

    const targetPath = destination || process.cwd();

    // Copiar apenas os arquivos do template (ignorando arquivos do projeto principal)
    copyRecursive(templateSourceDir, targetPath, { overwrite, verbose });

    console.log(chalk.green("\n✅ Template instalado com sucesso!"));
    console.log(
      chalk.green(`📁 Arquivos copiados para: ${chalk.bold(targetPath)}`)
    );

    return { template: selectedTemplate, targetPath };
  } finally {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

// Função para exibir instruções finais
function showFinalInstructions(projectPath, usingCurrentDir = false) {
  console.log(
    `\n${chalk.bold("🚀 Para começar, execute os seguintes comandos:")}`
  );
  if (!usingCurrentDir && projectPath) {
    console.log(`\n  ${chalk.cyan(`cd ${projectPath}`)}`);
  }
  console.log(`\n  ${chalk.cyan("npm install")}`);
  console.log(`  ${chalk.cyan("npx next dev")}\n`);
  console.log(
    chalk.gray(
      "💡 Dica: Use npx para executar comandos sem instalar globalmente!"
    )
  );
  console.log(chalk.gray("📚 Documentação: https://nextjs.org/docs\n"));
}

// Função para validar nome do projeto
function validateProjectName(name) {
  if (!name || name.trim().length === 0) {
    return "Nome do projeto é obrigatório";
  }
  if (!/^[a-zA-Z0-9-_]+$/.test(name.trim())) {
    return "Nome deve conter apenas letras, números, hífens e underscores";
  }
  return true;
}

// Função para tratar erros de forma padronizada
function handleError(error, context = "") {
  console.error(chalk.red(`❌ ${context}Ocorreu um erro:`));
  console.error(chalk.red(error.message));
  
  if (error.message.includes("404")) {
    console.log(
      chalk.yellow(
        "\n💡 Dica: O template selecionado pode não existir ainda."
      )
    );
    console.log(
      chalk.yellow(
        "Tente usar o template principal ou verifique se o nome está correto."
      )
    );
  }
  
  process.exit(1);
}

async function run() {
  // Obter os argumentos da linha de comando
  const args = process.argv.slice(2);
  
  // Parsear argumentos
  const parsedArgs = parseArgs(args);
  
  try {
    // Processar diferentes modos
    switch (parsedArgs.mode) {
      case 'help':
        showHelp();
        return;
        
      case 'list':
        listTemplates();
        return;
        
      case 'error':
        console.error(chalk.red(`❌ Erro: ${parsedArgs.error}`));
        console.log(chalk.yellow(`💡 ${parsedArgs.suggestion}`));
        console.log(chalk.gray("📋 Para ver templates disponíveis: npx create-template-vncsraniery@latest list"));
        process.exit(1);
        
      case 'install':
        // Verificar se está em projeto existente ou usando pasta atual
        const usingCurrentDir = parsedArgs.usingCurrentDir || isInExistingProject();
        const destination = usingCurrentDir ? null : parsedArgs.destination;
        
        if (!destination && !usingCurrentDir) {
          console.error(chalk.red("❌ Erro: Destino não especificado."));
          console.log(chalk.yellow("💡 Use: npx create-template-vncsraniery@latest add <template> <destino>"));
          console.log(chalk.gray("📁 Para pasta atual: npx create-template-vncsraniery@latest add <template> ./"));
          process.exit(1);
        }
        
        console.log(
          chalk.yellow(
            `📁 Modo: Baixando template "${parsedArgs.template}" ${
              usingCurrentDir ? "na pasta atual (./)" : `em "${destination}"`
            }`
          )
        );
        
        const result = await installTemplate(parsedArgs.template, destination);
        showFinalInstructions(result.targetPath, usingCurrentDir);
        return;
        
      case 'interactive':
        // Continuar com o fluxo interativo original
        break;
        
      default:
        console.error(chalk.red("❌ Modo de operação inválido."));
        process.exit(1);
    }
  } catch (err) {
    handleError(err, "Erro ao processar argumentos: ");
  }

  // Modo interativo (comportamento original)
  console.log(
    chalk.bold.rgb(
      5,
      150,
      255
    )("🚀 Bem-vindo ao criador de template do VncsRaniery!")
  );
  console.log(chalk.gray(`Versão: ${require("./package.json").version}`));
  console.log(
    chalk.gray(
      '💡 Dica: Use "npx create-template-vncsraniery@latest add <template> [destino]" para download direto.\n'
    )
  );

  try {
    let projectPath = "";
    let usingCurrentDir = false;

    // Verificar se está em projeto existente
    if (isInExistingProject()) {
      console.log(
        chalk.yellow(
          "📁 Detectado: Você está em uma pasta de projeto existente"
        )
      );
      console.log(
        chalk.gray(
          "Os arquivos do template serão adicionados à pasta atual\n"
        )
      );
      projectPath = process.cwd();
      usingCurrentDir = true;
    } else {
      // Solicitar nome do projeto
      const projectResponse = await prompts({
        type: "text",
        name: "projectName",
        message: "Qual o nome do seu novo projeto?",
        initial: "meu-novo-projeto",
        validate: validateProjectName,
      });

      projectPath = projectResponse.projectName.trim();
      if (!projectPath) {
        console.log(
          chalk.red(
            "❌ Nome do projeto é obrigatório. Cancelando a operação."
          )
        );
        process.exit(1);
      }

      // Verificar se a pasta já existe
      const fullProjectPath = path.join(process.cwd(), projectPath);
      if (fs.existsSync(fullProjectPath)) {
        console.log(
          chalk.red(
            `❌ A pasta "${projectPath}" já existe no diretório atual.`
          )
        );
        console.log(
          chalk.yellow(
            "Por favor, escolha um nome diferente ou remova a pasta existente."
          )
        );
        process.exit(1);
      }
    }

    // Selecionar template
    const templateResponse = await prompts({
      type: "select",
      name: "template",
      message: "Qual template você gostaria de usar?",
      choices: AVAILABLE_TEMPLATES,
      initial: 0,
    });

    if (!templateResponse.template) {
      console.log(
        chalk.red("❌ Template é obrigatório. Cancelando a operação.")
      );
      process.exit(1);
    }

    // Instalar template
    const result = await installTemplate(templateResponse.template, projectPath);
    showFinalInstructions(result.targetPath, usingCurrentDir);
    
  } catch (err) {
    handleError(err, "Erro no modo interativo: ");
  }
}

// Inicia a execução do script
run();