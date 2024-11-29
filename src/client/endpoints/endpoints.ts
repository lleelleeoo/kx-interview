import Axios, { AxiosRequestConfig } from "axios";
import { GetEmployeesRequestParams, GetEmployeesResponse } from "../../types/apiV1";

const axios = Axios.create({
    baseURL: "http://localhost:5173",
});

export const getEmployees = async (args?: GetEmployeesRequestParams, config?: AxiosRequestConfig): Promise<GetEmployeesResponse> => {
    const response = await axios.get<GetEmployeesResponse>("/api/v1/employees", config);

    return response.data;
};
