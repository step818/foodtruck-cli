import axios from 'axios';
import chalk from 'chalk';

export function validateApiKey(apiKey) {
  if (!apiKey) {
    console.error(
      chalk.redBright(
        `API Key has not been set up yet.`
      )
    );
    console.warn(
      `Please use command ${chalk.greenBright(
        'show-open-food-trucks config --apiKey <apiKey>'
      )} to save your API key.
      `
    );
    return false;
  }
  return true;
}

export async function queryFoodTrucks(apiKey) {
  const baseUri = 'https://data.sfgov.org/resource/jjew-r69b.json';
  const url = getApiUrl(baseUri, apiKey);
  return await axios({
    method: 'get',
    url: url
  });
}

function getApiUrl(baseUri, apiKey) {
  let url = baseUri + `?$$app_token=${apiKey.trim()}`;
  // url += `&$$app_token=${apiKey.trim()}`;
  return url;
}