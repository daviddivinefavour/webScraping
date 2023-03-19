import { newSearchService } from '../services/duckduckgo.service';
import { respond } from '../utils/response';

export const newSearch = async (req, res) => {
  const data = await newSearchService(req.body?.search);
  return respond({
    status: data.status,
    message: data.message
  })(data?.data)(res);
};

export const getOlderSearches = async (req, res) => {};
