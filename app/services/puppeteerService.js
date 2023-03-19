import puppeteer from 'puppeteer';
import { returnResult } from '../utils/response';

export default async (searchEngine, query) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `${searchEngine}/?q=${query}&t=h_&ia=web`;
  await page.goto(url);

  const searchResults = await page.$$(
    'div.nrn-react-div article[data-testid="result"]'
  );

  const results = [];

  // if (results?.length < 1) {
  //   return returnResult(false, {
  //     status: 400,
  //     message: 'No results found.'
  //   });
  // }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < searchResults.length; i++) {
    const result = searchResults[i];

    results.push({
      title: await result.$eval('h2 a', (node) => node.innerText),
      url: await result.$eval('h2 a', (node) => node.href)
    });
  }

  console.log('RESULTS________________________\n',results);


  await browser.close();

  return returnResult(true, results);
};
