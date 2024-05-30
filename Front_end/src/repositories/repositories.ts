'use server';

import client from './connection';
import { FormDTO } from '@/dtos/form.dto';
import { ResponseDTO } from '../dtos/response.token';

export const ValidateUser = ({ email, senha }: FormDTO): Promise<ResponseDTO> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await client.post<ResponseDTO>('/login', {
                email,
                senha
            });
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
};
