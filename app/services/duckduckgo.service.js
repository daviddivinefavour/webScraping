import { SEARCH_ENGINES } from '../data/constants';
import { returnResult } from '../utils/response';
import scraper from './puppeteerService';

export const newSearchService = async (query, options) => {
  const searchEngine = SEARCH_ENGINES.duckduckgo;

  const results = await scraper(searchEngine, query);
  if (!results?.type) {
    return returnResult(false, {
      status: 400,
      message: results.message || 'An error occured'
    });
  }

  return returnResult(true, {
    status: 200,
    message: 'Completed new search',
    data: {
      search_metadata: {
        status: 'Success',
        created_at: new Date(),
        duckduckgo_url: `${searchEngine}/?q=${query}&t=h_&ia=web`
      },
      search_parameters: {
        engine: 'duckduckgo',
        q: query
      },
      search_results: results
    }
  });
};

export const getSearchLogs = async () => {};
