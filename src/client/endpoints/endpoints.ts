import Axios, { AxiosRequestConfig } from "axios";
import { CreateEmployeeRequestBody, CreateEmployeeResponse, GetEmployeesRequestParams, GetEmployeesResponse, PostEmployeeRequestBody, PostEmployeeRequestParams, PostEmployeeResponse } from "../../types/apiV1";

const axios = Axios.create({
    baseURL: "http://localhost:5173",
});

export const getEmployees = async (args?: GetEmployeesRequestParams, config?: AxiosRequestConfig): Promise<GetEmployeesResponse> => {
    const response = await axios.get<GetEmployeesResponse>("/api/v1/employees", config);

    return response.data;
};

type PostEmployeeArgs = PostEmployeeRequestParams & PostEmployeeRequestBody
export const postEmployee = async ({id, ...args}: PostEmployeeArgs, config?: AxiosRequestConfig): Promise<PostEmployeeResponse> => {
    const response = await axios.post<PostEmployeeResponse>(`/api/v1/employees/${id}`, args, config);

    return response.data;
}

export const createEmployee = async (args: CreateEmployeeRequestBody, config?: AxiosRequestConfig): Promise<CreateEmployeeResponse> => {
    const response = await axios.post<CreateEmployeeResponse>("/api/v1/employees", args, config);

    return response.data;
}
