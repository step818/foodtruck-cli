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
    head: ['Food Truck', 'Location', 'Day', 'Start', 'End'],
    colWidths: [15, 18, 8, 7, 7],
    wordWrap: true
  });
// create filter for adding food trucks at current DATE & TIME
  let current = new Date();
  let clock = current.getHours().toString() + ":" + current.getMinutes().toString(); 
  console.log(clock);
  for (let i = 0; i< data.length; i++) {
// Only retrieve if day and time is current
    if (data[i].dayorder == current.getDay()
        && data[i].start24 <= clock
        && data[i].end24 >= clock) {
      table.push([
        data[i].applicant,
        data[i].location,
        data[i].dayofweekstr,
        data[i].start24,
        data[i].end24
      ]);
    }
  }

  // if (table.length > 10) {

  // }

  console.log(table.length);
  let amount = 10;
  console.log(table.slice(0, amount).toString());
}