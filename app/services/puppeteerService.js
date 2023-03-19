/* eslint-disable no-await-in-loop */
import puppeteer from 'puppeteer';

export default async (searchEngine, query) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `${searchEngine}/?q=${query}&t=h_&ia=web`;
  await page.goto(url);

  const searchResults = await page.$$(
    'div.nrn-react-div article[data-testid="result"]'
  );

  const results = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < searchResults.length; i++) {
    const result = searchResults[i];

    results.push({
      position: i + 1,
      title: await result.$eval('h2 a', (node) => node.innerText),
      url: await result.$eval('h2 a', (node) => node.href),
      snippet: await result.$eval(
        'div[class="OgdwYG6KE2qthn9XQWFC"]',
        (node) => node.innerText
      )
    });
  }

  await browser.close();

  return results.length < 1 ? false : results;
};
