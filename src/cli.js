import minimist from 'minimist';
import { version } from './version';
import { help } from './help';
import { configure } from './configure';
import { now } from './now';

export async function cli(argsArray) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || 'help';
  // if flag is --version or -v , gets npm version
  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'version':
      version(args);
      break;

    case 'help':
      help(args);
      break;
    
    case 'config':
      configure(args);
      console.log("token accepted");
      break;

    case 'now':
      now(args);
      break;

      case 'next':
        next(args);
        break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}