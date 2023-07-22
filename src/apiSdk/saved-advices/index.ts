import axios from 'axios';
import queryString from 'query-string';
import { SavedAdviceInterface, SavedAdviceGetQueryInterface } from 'interfaces/saved-advice';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSavedAdvices = async (
  query?: SavedAdviceGetQueryInterface,
): Promise<PaginatedInterface<SavedAdviceInterface>> => {
  const response = await axios.get('/api/saved-advices', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSavedAdvice = async (savedAdvice: SavedAdviceInterface) => {
  const response = await axios.post('/api/saved-advices', savedAdvice);
  return response.data;
};

export const updateSavedAdviceById = async (id: string, savedAdvice: SavedAdviceInterface) => {
  const response = await axios.put(`/api/saved-advices/${id}`, savedAdvice);
  return response.data;
};

export const getSavedAdviceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/saved-advices/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSavedAdviceById = async (id: string) => {
  const response = await axios.delete(`/api/saved-advices/${id}`);
  return response.data;
};
