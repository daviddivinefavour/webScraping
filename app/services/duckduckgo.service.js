import moment from 'moment';
import { SEARCH_ENGINES } from '../data/constants';
import scraper from './puppeteerService';

export const newSearchService = async (query) => {
  const searchEngine = SEARCH_ENGINES.duckduckgo;

  const results = await scraper(searchEngine, query);
  if (!results) {
    return {
      status: 400,
      message: 'No results found.'
    };
  }

  return {
    status: 200,
    message: 'Completed new search',
    data: {
      search_metadata: {
        status: 'Success',
        created_at: moment(),
        duckduckgo_url: `${searchEngine}/?q=${query}&t=h_&ia=web`
      },
      search_parameters: {
        engine: 'duckduckgo',
        q: query
      },
      search_results: results
    }
  };
};
