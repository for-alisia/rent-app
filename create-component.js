const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
require('dotenv').config();

program
  .option('-f, --folder <type>', 'folder for component', 'components')
  .option('-c --component <type>', 'component name');

program.parse(process.argv);

const pathToFolder = path.join(__dirname, 'src', program.folder);

// TODO refactore this file not to use readline, just through commander

if (!fs.existsSync(path.join(pathToFolder))) {
  fs.mkdirSync(pathToFolder);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let componentName = '';

question();

rl.on('close', async () => {
  fs.mkdirSync(path.join(pathToFolder, componentName));
  fs.writeFileSync(
    path.join(pathToFolder, componentName, `${componentName}.js`),
    `import React from 'react';
    import './${componentName}.scss';

    const ${componentName} = (props) => {}

    export default ${componentName};
  `
  );
  fs.writeFileSync(path.join(pathToFolder, componentName, `${componentName}.scss`), '');
  fs.writeFileSync(
    path.join(pathToFolder, componentName, `${componentName}.test.js`),
    `import React from 'react';
     import ${componentName} from './${componentName}';`
  );

  fs.writeFileSync(path.join(pathToFolder, componentName, 'index.js'), `export { default } from './${componentName}';`);
  console.log('Component was created');
});

function question() {
  rl.question('Enter component name: ', (answer) => {
    componentName = answer;
    console.log(answer);
    if (fs.existsSync(path.join(pathToFolder, componentName))) {
      console.log('Component with such name is already exists');
      question();
    } else {
      rl.close();
    }
  });
}
