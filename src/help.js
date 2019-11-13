import chalk from 'chalk';

const menus = {
  main: `
    ${chalk.greenBright('show-open-food-trucks [command] <options>')}
    
    ${chalk.blueBright('version')} ........ show package version
    ${chalk.blueBright('help')} ........... show help menu for a command
    ${chalk.blueBright('config')} ......... set API token after command with < -k=<APIKEY> >
    ${chalk.blueBright('now')} ............ show food trucks open now
    ${chalk.blueBright('next')} ........... show next 10 food trucks if list exceeds 10
    `,

}

export async function help(args) {
  const subCmd = args._[0] === 'help'
  ? args._[1]
  :args._[0]
  console.log(menus[subCmd] || menus.main);
}