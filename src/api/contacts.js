import axios from 'axios';
axios.defaults.baseURL = 'https://657a08321acd268f9afa9c2a.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios();
  return data;
};

export const getSingleProduct = async id => {
  const { data } = await axios(`/${id}`);
  return data;
};

export const getProductsWithSearch = async query => {
  const { data } = await axios(`/search?q=${query}`);
  return data;
};
