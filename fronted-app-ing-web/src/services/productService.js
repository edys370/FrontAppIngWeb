import api from '../api/axios';

export const getProducts = (filters) => api.get('/api/v1/products', { params: filters });
export const getProduct = (id) => api.get(`/api/v1/products/${id}`);
export const createProduct = (data) => api.post('/api/v1/products', data);
export const updateProduct = (id, data) => api.put(`/api/v1/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/api/v1/products/${id}`);
export const getHealth = () => api.get('/health');
export const getHealthLive = () => api.get('/health/live');
export const getHealthReady = () => api.get('/health/ready');
