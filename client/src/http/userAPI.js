import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
    role: 'ADMIN',
  });

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  console.log(email);
  const { data } = await $host.post('api/user/login', {
    email,
    password,
  });

  return jwt_decode(data.token);
};

export const check = async () => {
  const response = await $host.post('api/user/check', {});

  return response;
};
