#!/usr/bin/env node

const { execSync } = require('child_process');
const program = require('commander');

program
  .version('1.0.0')
  .arguments('<projectName>')
  .description('Initialize a new project with My React Native Template')
  .action((projectName) => {
    console.log(`Creating a new React Native project named ${projectName}`);
    const repoUrl = 'https://github.com/ahaseeb001/myprojectdummy.git'; // Change this to your repo URL
    execSync(`git clone ${repoUrl} ${projectName}`);
    execSync(`cd ${projectName} && rm -rf .git && npm install`);
    console.log(`Project ${projectName} created successfully!`);
  });

program.parse(process.argv);