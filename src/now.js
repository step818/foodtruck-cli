import Conf from 'conf';
import { configKey } from './configure';
import { validateApiKey, queryFoodTrucks } from './utils';

export async function now(args) {
  const config = new Conf().get(configKey);
}