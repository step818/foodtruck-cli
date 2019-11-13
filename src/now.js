import Conf from 'conf';
import Table from 'cli-table3';
import { configKey } from './configure';
import { validateApiKey, queryFoodTrucks } from './utils';

export async function now(args) {
  const config = new Conf().get(configKey);
  const apiKey = args.apiKey || args.k || config.apiKey;
  if (!validateApiKey(apiKey)) {
    return;
  }

  const { data } = await queryFoodTrucks(apiKey);

  const table = new Table({
    head: ['Food Truck', 'Location'],
    colWidths: [20, 28],
    wordWrap: true
  });
  // create filter for adding food trucks at current DATE & TIME
  let day = new Date();
  for (let i = 0; i< data.length; i++) {
    if (data[i].dayorder == day.getDay()) {
      table.push([
        data[i].applicant,
        data[i].location
      ]);
    }
  }
  console.log(table.toString());
}