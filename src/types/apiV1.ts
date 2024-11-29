export interface Employee {
    id: number;
    name: string;
    status: 'working' | 'onVacation' | 'lunchTime' | 'businessTrip';
    img: string;
}

export interface GetEmployeesRequestParams {}

export interface GetEmployeesResponse {
    employees: Employee[];
}

export interface GetEmployeeRequestParams {
    id: string;
}

export interface GetEmployeeResponse {
    employee: Employee;
}

export interface PostEmployeeRequestParams {
    id: string;
}

export type PostEmployeeRequestBody = Partial<Omit<Employee, 'id'>>;

export interface PostEmployeeResponse {
    employee: Employee;
}

export type CreateEmployeeRequestBody = Omit<Employee, 'id'>;
export type CreateEmployeeResponse = {
    employee: Employee;
};
