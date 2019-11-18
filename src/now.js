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
  let temp = [];
  let table = new Table({
    head: ['Food Truck', 'Location', 'Day', 'Opens', 'Closes'],
    colWidths: [18, 17, 8, 7, 8],
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
// clock is the current time in 24 hours setting
  let clock = hours.toString() + ":" + minutes.toString(); 
  console.log("The time is: " + clock);

  for (let key in data) {
// Only retrieve if day and time is current
    if (data[key].dayorder == current.getDay()
        && data[key].start24 <= clock
        && data[key].end24 >= clock) {
// make a list first, then push it in to a table, so that way
// each table has its own heading
      temp.push({
        id: key,
        applicant: data[key].applicant,
        location: data[key].location,
        dayofweekstr: data[key].dayofweekstr,
        start24: data[key].start24,
        end24: data[key].end24
      });
    }
  }
// Sort the temporary array alphabetically
  temp.sort((a,b) => a.applicant.localeCompare(b.applicant));

  console.log("There are a total of " + temp.length + " food trucks open now.");
  if (temp.length >= 10) {
    let amount = 10;
    for (let i = 0; i < amount; i++) {
      table.push([
        temp[i].applicant,
        temp[i].location,
        temp[i].dayofweekstr,
        temp[i].start24,
        temp[i].end24
      ]);
    }
  }
  else if (temp.length < 10) {
    for (let i = 0; i < temp.length; i++) {
      table.push([
        temp[i].applicant,
        temp[i].location,
        temp[i].dayofweekstr,
        temp[i].start24,
        temp[i].end24
      ]);
    }
  } 
  
  console.log(table.toString());
// wait for user to cmd to view next 10 items
//
}