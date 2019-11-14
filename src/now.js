import Conf from 'conf';
import Table from 'cli-table3';
import { configKey } from './configure';
import { validateApiKey, queryFoodTrucks } from './utils';
// import { next } from './next';

export async function now(args) {
  const config = new Conf().get(configKey);
  const apiKey = args.apiKey || args.k || config.apiKey;
  if (!validateApiKey(apiKey)) {
    return;
  }

  const { data } = await queryFoodTrucks(apiKey);

  let table = new Table({
    head: ['Food Truck', 'Location', 'Day', 'Start', 'End'],
    colWidths: [15, 18, 8, 7, 7],
    wordWrap: true
  });
// create filter for adding food trucks at current DATE & TIME
  let current = new Date();
  let hours = addZero(current.getHours());
  let minutes = addZero(current.getMinutes());
// Check to see Hours and Minutes format is correct for numbers without a preceding '0',
// i.e. should be "01" instead of "1"
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let clock = hours.toString() + ":" + minutes.toString(); 
  console.log("The time is: " + clock);

  for (let i = 0; i< data.length; i++) {
// Only retrieve if day and time is current
    if (data[i].dayorder == current.getDay()
        && data[i].start24 <= clock
        && data[i].end24 >= clock) {
// make a list first, then push it in to a table, so that way
// each table has its own heading
      table.push([
        data[i].applicant,
        data[i].location,
        data[i].dayofweekstr,
        data[i].start24,
        data[i].end24
      ]);
    }
  }
  table.sort();

  // if (table.length > 10) {
  //   export const table = table;
  // }

  console.log("There are a total of " + table.length + " food trucks open now.");
  let amount = 10;
  console.log(table.slice(0, amount).toString());
// wait for user to cmd to view next 10 items
//
}