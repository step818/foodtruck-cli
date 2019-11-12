import Conf from 'conf';
import { configKey } from './configure';
import { validateApiKey, queryFoodTrucks } from './utils';

export async function now(args) {
  const config = new Conf().get(configKey);
  const apiKey = args.apiKey || args.k || config.apiKey;
  if (!validateApiKey(apiKey)) {
    return;
  }

  const { data } = await queryFoodTrucks(apiKey);

  console.log(data);
}