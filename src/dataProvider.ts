import axios from "axios";
import { DataProvider } from "@pankod/refine-core";

const API_URL = "https://desarrollotecnologicoar.com/api";

export const dataProvider: DataProvider = {
    getList: async ({ resource, pagination, sort, filters }) => {
        const response = await axios.get(`${API_URL}/${resource}`);
        return {
            data: response.data,
            total: response.data.length,
        };
    },
    getOne: async ({ resource, id }) => {
        const response = await axios.get(`${API_URL}/${resource}/${id}`);
        return { data: response.data };
    },
    create: async ({ resource, variables }) => {
        console.log(variables);
        const response = await axios.post(`${API_URL}/${resource}`, variables);
        return { data: response.data };
    },
    update: async ({ resource, id, variables }) => {
        console.log(variables);
        const response = await axios.put(`${API_URL}/${resource}/${id}`, variables);
        return { data: response.data };
    },
    deleteOne: async ({ resource, id }) => {
        const response = await axios.delete(`${API_URL}/${resource}/${id}`);
        return { data: response.data };
    },
    // Implementa getApiUrl aquí
    getApiUrl: () => API_URL,
};