import Conf from 'conf';
import { validateApiKey } from './utils';

export const configKey = 'foodtruck-cli';

export async function configure(args) {
  const config = new Conf();
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

  let apiKey = args.apiKey ? args.apiKey : args.k;
  // let apiKey = args.apiKey || args.k;
  if (!apiKey) {
    apiKey = currentConfigObject.apiKey;
  }
  if (!validateApiKey(apiKey)) {
    return;
  }

  config.set(configKey, { apiKey: apiKey });
}