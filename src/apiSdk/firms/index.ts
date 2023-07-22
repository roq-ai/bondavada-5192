import axios from 'axios';
import queryString from 'query-string';
import { FirmInterface, FirmGetQueryInterface } from 'interfaces/firm';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFirms = async (query?: FirmGetQueryInterface): Promise<PaginatedInterface<FirmInterface>> => {
  const response = await axios.get('/api/firms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFirm = async (firm: FirmInterface) => {
  const response = await axios.post('/api/firms', firm);
  return response.data;
};

export const updateFirmById = async (id: string, firm: FirmInterface) => {
  const response = await axios.put(`/api/firms/${id}`, firm);
  return response.data;
};

export const getFirmById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/firms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFirmById = async (id: string) => {
  const response = await axios.delete(`/api/firms/${id}`);
  return response.data;
};
