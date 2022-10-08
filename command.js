const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

const tsxTemplate = tsx => {
  return `
import React from 'react'

const ${tsx} = () => {
  return (
    <div>${tsx}</div>
  )
}

export default ${tsx} 
    
    `;
};

const storybookTemplate = tsx => {
  return `
    import React from 'react';

    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import ${tsx} from './${tsx}';
    
    export default {
      title: 'Components/${tsx}',
      component: ${tsx},
    } as ComponentMeta<typeof ${tsx}>;
    
    export const CardDafault: ComponentStory<typeof ${tsx}> = () => (
      <${tsx}/>
    );
    
      `;
};

const exist = dir => {
  try {
    fs.accessSync(
      dir,
      fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
    );
    return true;
  } catch (e) {
    return false;
  }
};

const makeStoybook = dir => {
  const filePath = `./src/components/${dir}`;
  const dirname = path
    .relative('.', path.normalize(filePath))
    .split(path.sep)
    .filter(p => !!p);

  dirname.forEach((d, idx) => {
    const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);

    if (!exist(pathBuilder)) {
      fs.mkdirSync(pathBuilder);
    }
  });
};

const makeTsxbook = dir => {
  const filePath = `./src/components/${dir}`;

  const dirname = path
    .relative('.', path.normalize(filePath))
    .split(path.sep)
    .filter(p => !!p);

  dirname.forEach((d, idx) => {
    const pathBuilder = dirname.slice(0, idx + 1).join(path.sep);
    if (!exist(pathBuilder)) {
      console.log('pathBuilder', pathBuilder);
      fs.mkdirSync(pathBuilder);
    }
  });
};

const makeStorybookTemplate = dir => {
  makeStoybook(dir);
  const pathToFile = path.join(`./src/components/${dir}`, `${dir}.stories.tsx`);

  if (exist(pathToFile)) {
    console.error(chalk.bold.red('이미 해당 파일이 존재합니다'));
  } else {
    const componentName = upperCase(dir);

    fs.writeFileSync(pathToFile, storybookTemplate(componentName));
    console.log(chalk.green(pathToFile, '생성 완료'));
  }
};

const makeTsxTemplate = dir => {
  makeTsxbook(dir);
  const pathToFile = path.join(`./src/components/${dir}`, `${dir}.tsx`);
  if (exist(pathToFile)) {
    console.error(chalk.bold.red('이미 해당 파일이 존재합니다'));
  } else {
    const componentName = upperCase(dir);
    fs.writeFileSync(pathToFile, tsxTemplate(componentName));
    console.log(chalk.green(pathToFile, '생성 완료'));
  }
};
const upperCase = str => {
  const firstChar = str[0];

  const firstCharUpper = firstChar.toUpperCase();

  const leftChar = str.slice(1, str.length);

  const result = firstCharUpper + leftChar;
  return result;
};

program
  .command('template ')
  .usage(' --filename [filename] --path [path]')
  .description('템플릿을 생성합니다.')
  .alias('tmpl')
  .option('-f, --filename [filename]', '파일명을 입력하세요.', 'index')
  .action(options => {
    // makeTemplate(type, options.filename, options.directory);
    makeStorybookTemplate(options.filename);
    console.log('options', options.filename);
    makeTsxTemplate(options.filename);
  });

program.version('0.0.1', '-v, --version').name('cli');

program
  .action((cmd, args) => {
    if (args) {
      console.log(chalk.bold.red('해당 명령어를 찾을 수 없습니다.'));
      program.help();
    } else {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: '파일의 이름을 입력하세요.',
            default: 'index',
          },
        ])
        .then(answers => {
          if (answers.confirm) {
            makeTemplate(answers.type, answers.name, answers.directory);
            console.log(chalk.rgb(128, 128, 128)('터미널을 종료합니다.'));
          }
        });
    }
  })
  .parse(process.argv);
