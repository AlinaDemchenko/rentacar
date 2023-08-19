import axios from 'axios';

const $instance = axios.create({
    baseURL: 'https://64c15291fa35860baea0646b.mockapi.io',
  });

  export const fetchCars = async () => {
    const { data } = await $instance.get('/rentacar');
    return data;
  };

  // export const fetchCar = async (id) => {
  //   console.log(id);
  //   const { data } = await $instance.get(`/rentacar/${id}`);
  //   console.log('data: ', data);
  //   return data;
  // };



 
