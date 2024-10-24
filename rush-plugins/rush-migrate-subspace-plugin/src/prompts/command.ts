import inquirer from 'inquirer';

export const chooseCommandPrompt = async (): Promise<string> => {
  const { command } = await inquirer.prompt([
    {
      type: 'list',
      name: 'command',
      message: 'What would you like to do?',
      choices: [
        { name: 'Move a project to a new subspace', value: 'move' },
        { name: 'Detect project dependencies version mismatches', value: 'report' },
        { name: 'Fix project dependencies version mismatches', value: 'sync' },
        { name: 'Exit application', value: 'exit' }
      ]
    }
  ]);

  return command;
};
