import axios from 'axios';
import queryString from 'query-string';
import { AdviceInterface, AdviceGetQueryInterface } from 'interfaces/advice';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdvice = async (query?: AdviceGetQueryInterface): Promise<PaginatedInterface<AdviceInterface>> => {
  const response = await axios.get('/api/advice', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdvice = async (advice: AdviceInterface) => {
  const response = await axios.post('/api/advice', advice);
  return response.data;
};

export const updateAdviceById = async (id: string, advice: AdviceInterface) => {
  const response = await axios.put(`/api/advice/${id}`, advice);
  return response.data;
};

export const getAdviceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/advice/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdviceById = async (id: string) => {
  const response = await axios.delete(`/api/advice/${id}`);
  return response.data;
};
