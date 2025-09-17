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

// Comandos disponíveis
const AVAILABLE_COMMANDS = {
  add: "Adiciona um template específico ao projeto",
  list: "Lista todos os templates disponíveis",
  help: "Mostra informações de ajuda e exemplos de uso"
};

// Função para detectar se está em uma pasta existente
function isInExistingProject() {
  const currentDir = process.cwd();
  const packageJsonPath = path.join(currentDir, "package.json");
  return fs.existsSync(packageJsonPath);
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

// Função para copiar arquivos recursivamente
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach((file) => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Função para baixar template para pasta existente
async function downloadToExistingProject(selectedTemplate, targetPath) {
  const tempDir = path.join(process.cwd(), ".temp-template-download");
  const templateSourceDir = path.join(
    tempDir,
    "templates",
    selectedTemplate.folder
  );

  try {
    console.log(
      chalk.yellow(
        `\n📦 Baixando template "${selectedTemplate.title}" para a pasta atual...`
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

    const files = fs.readdirSync(templateSourceDir);
    files.forEach((file) => {
      const srcPath = path.join(templateSourceDir, file);
      const destPath = path.join(targetPath, file);
      copyRecursive(srcPath, destPath);
    });

    console.log(chalk.green("\n✅ Template instalado com sucesso!"));
    console.log(
      chalk.green(`📁 Arquivos copiados para: ${chalk.bold(targetPath)}`)
    );
  } finally {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

// Função para baixar template para nova pasta
async function downloadToNewProject(projectName, selectedTemplate) {
  const projectPath = path.join(process.cwd(), projectName);
  const tempDir = path.join(process.cwd(), ".temp-template-download");
  const templateSourceDir = path.join(
    tempDir,
    "templates",
    selectedTemplate.folder
  );

  try {
    console.log(
      chalk.yellow(`\n📦 Baixando template "${selectedTemplate.title}"...`)
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

    if (fs.existsSync(projectPath)) {
      throw new Error(
        `A pasta "${projectName}" já existe. Por favor, remova-a ou escolha outro nome.`
      );
    }

    fs.mkdirSync(projectPath, { recursive: true });

    const files = fs.readdirSync(templateSourceDir);
    files.forEach((file) => {
      const srcPath = path.join(templateSourceDir, file);
      const destPath = path.join(projectPath, file);
      copyRecursive(srcPath, destPath);
    });

    console.log(chalk.green("\n✅ Template baixado com sucesso!"));
    console.log(
      chalk.green(`📁 Projeto criado em: ${chalk.bold(projectPath)}`)
    );
  } finally {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

async function run() {
  // Obter os argumentos da linha de comando
  const args = process.argv.slice(2);
  
  // Processar comandos especiais
  if (args.length > 0) {
    const command = args[0].toLowerCase();
    
    // Comando de ajuda
    if (command === "help" || command === "--help" || command === "-h") {
      showHelp();
      return;
    }
    
    // Comando para listar templates
    if (command === "list" || command === "--list" || command === "-l") {
      listTemplates();
      return;
    }
    
    // Comando add para adicionar template
    if (command === "add") {
      if (args.length < 2) {
        console.log(chalk.red("❌ Erro: Template não especificado."));
        console.log(chalk.yellow("💡 Use: npx create-template-vncsraniery@latest add <template> [destino]"));
        console.log(chalk.gray("📋 Para ver templates disponíveis: npx create-template-vncsraniery@latest list"));
        return;
      }
      
      const templateValue = args[1];
      const destination = args[2] || "";
      let usingCurrentDir = false;
      
      // Verifica se o destino é './'
      if (destination === "./" || destination === ".\\") {
        usingCurrentDir = true;
      }
      
      // Encontrar o template
      const selectedTemplate = AVAILABLE_TEMPLATES.find(
        (t) => t.value === templateValue
      );
      
      if (!selectedTemplate) {
        console.log(chalk.red(`❌ Template "${templateValue}" não encontrado.`));
        console.log(chalk.yellow("💡 Use: npx create-template-vncsraniery@latest list para ver templates disponíveis"));
        return;
      }
      
      // Executar download do template
      try {
        if (usingCurrentDir || isInExistingProject()) {
          const targetPath = process.cwd();
          console.log(
            chalk.yellow(
              `📁 Modo: Baixando template "${selectedTemplate.value}" na pasta atual (./)`
            )
          );
          await downloadToExistingProject(selectedTemplate, targetPath);
        } else {
          if (!destination) {
            console.log(chalk.red("❌ Erro: Destino não especificado."));
            console.log(chalk.yellow("💡 Use: npx create-template-vncsraniery@latest add <template> <destino>"));
            console.log(chalk.gray("📁 Para pasta atual: npx create-template-vncsraniery@latest add <template> ./"));
            return;
          }
          await downloadToNewProject(destination, selectedTemplate);
        }
        
        // Exibir instruções finais
        console.log(
          `\n${chalk.bold("🚀 Para começar, execute os seguintes comandos:")}`
        );
        if (!usingCurrentDir && destination) {
          console.log(`\n  ${chalk.cyan(`cd ${destination}`)}`);
        }
        console.log(`\n  ${chalk.cyan("npm install")}`);
        console.log(`  ${chalk.cyan("npx next dev")}\n`);
        console.log(
          chalk.gray(
            "💡 Dica: Use npx para executar comandos sem instalar globalmente!"
          )
        );
        console.log(chalk.gray("📚 Documentação: https://nextjs.org/docs\n"));
        return;
      } catch (err) {
        console.error(chalk.red("❌ Ocorreu um erro ao baixar o template:"));
        console.error(chalk.red(err.message));
        return;
      }
    }
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

  let specificTemplateValue = null;
  let projectName = "";
  let usingCurrentDir = false;

  // Analisa os argumentos para encontrar o template e o nome do projeto/pasta (modo legado)
  if (args.length > 0) {
    specificTemplateValue = args[0];
    if (args.length > 1) {
      projectName = args[1];
    }
  }

  // Verifica se o segundo argumento é './'
  if (projectName === "./" || projectName === ".\\") {
    usingCurrentDir = true;
    projectName = ""; // Se estiver usando a pasta atual, o nome do projeto não é relevante
  }

  let selectedTemplate;

  // Se um template for especificado, encontre-o nos templates disponíveis
  if (specificTemplateValue) {
    selectedTemplate = AVAILABLE_TEMPLATES.find(
      (t) => t.value === specificTemplateValue
    );
    if (!selectedTemplate) {
      console.log(
        chalk.red(`❌ Template "${specificTemplateValue}" não encontrado.`)
      );
      process.exit(1);
    }
  }

  // Fluxo de instalação
  try {
    if (selectedTemplate) {
      // Fluxo para template especificado
      if (usingCurrentDir || isInExistingProject()) {
        const targetPath = process.cwd();
        console.log(
          chalk.yellow(
            `📁 Modo: Baixando template "${selectedTemplate.value}" na pasta atual (./)`
          )
        );
        await downloadToExistingProject(selectedTemplate, targetPath);
      } else {
        if (!projectName) {
          const projectResponse = await prompts({
            type: "text",
            name: "projectName",
            message: "Qual o nome do seu novo projeto?",
            initial: "meu-novo-projeto",
            validate: (value) => {
              if (!value || value.trim().length === 0) {
                return "Nome do projeto é obrigatório";
              }
              if (!/^[a-zA-Z0-9-_]+$/.test(value.trim())) {
                return "Nome deve conter apenas letras, números, hífens e underscores";
              }
              return true;
            },
          });
          projectName = projectResponse.projectName.trim();
          if (!projectName) {
            console.log(
              chalk.red(
                "❌ Nome do projeto é obrigatório. Cancelando a operação."
              )
            );
            process.exit(1);
          }
        }
        await downloadToNewProject(projectName, selectedTemplate);
      }
    } else {
      // Fluxo interativo com prompts (como o original)
      let currentProjectPath = "";
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
        currentProjectPath = process.cwd();
      } else {
        const projectResponse = await prompts({
          type: "text",
          name: "projectName",
          message: "Qual o nome do seu novo projeto?",
          initial: "meu-novo-projeto",
          validate: (value) => {
            if (!value || value.trim().length === 0) {
              return "Nome do projeto é obrigatório";
            }
            if (!/^[a-zA-Z0-9-_]+$/.test(value.trim())) {
              return "Nome deve conter apenas letras, números, hífens e underscores";
            }
            return true;
          },
        });

        currentProjectPath = projectResponse.projectName.trim();
        if (!currentProjectPath) {
          console.log(
            chalk.red(
              "❌ Nome do projeto é obrigatório. Cancelando a operação."
            )
          );
          return;
        }

        const projectPath = path.join(process.cwd(), currentProjectPath);
        if (fs.existsSync(projectPath)) {
          console.log(
            chalk.red(
              `❌ A pasta "${currentProjectPath}" já existe no diretório atual.`
            )
          );
          console.log(
            chalk.yellow(
              "Por favor, escolha um nome diferente ou remova a pasta existente."
            )
          );
          return;
        }
      }

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
        return;
      }
      selectedTemplate = AVAILABLE_TEMPLATES.find(
        (t) => t.value === templateResponse.template
      );

      if (isInExistingProject()) {
        await downloadToExistingProject(selectedTemplate, currentProjectPath);
      } else {
        await downloadToNewProject(currentProjectPath, selectedTemplate);
      }
    }

    // Exibir instruções finais
    const finalProjectPath = usingCurrentDir
      ? process.cwd()
      : path.join(process.cwd(), projectName);
    console.log(
      `\n${chalk.bold("🚀 Para começar, execute os seguintes comandos:")}`
    );
    if (!usingCurrentDir) {
      console.log(`\n  ${chalk.cyan(`cd ${projectName}`)}`);
    }
    console.log(`\n  ${chalk.cyan("npm install")}`);
    console.log(`  ${chalk.cyan("npx next dev")}\n`);
    console.log(
      chalk.gray(
        "💡 Dica: Use npx para executar comandos sem instalar globalmente!"
      )
    );
    console.log(chalk.gray("📚 Documentação: https://nextjs.org/docs\n"));
  } catch (err) {
    console.error(chalk.red("❌ Ocorreu um erro ao baixar o template:"));
    console.error(chalk.red(err.message));

    if (err.message.includes("404")) {
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
  }
}

// Inicia a execução do script
run();