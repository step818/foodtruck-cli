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
    colWidths: [18, 20, 10, 9, 9],
    wordWrap: true
  });
  // create filter for adding food trucks at current DATE & TIME
  let currentDay = new Date();
  let time = currentDay.getHours().toString() + ":" + currentDay.getMinutes().toString(); 
  console.log(time);
  for (let i = 0; i< data.length; i++) {
    if (data[i].dayorder == currentDay.getDay()
        && data[i].start24 <= time
        && data[i].end24 >= time) {
      table.push([
        data[i].applicant,
        data[i].location,
        data[i].dayofweekstr,
        data[i].start24,
        data[i].end24
      ]);
    }
  }
  console.log(table.toString());
}