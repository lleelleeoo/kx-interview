import { FastifyInstance } from "fastify";
import { employees } from '../mockData/employees';
import { CreateEmployeeRequestBody, CreateEmployeeResponse, GetEmployeeRequestParams, GetEmployeeResponse, GetEmployeesRequestParams, GetEmployeesResponse, PostEmployeeRequestBody, PostEmployeeRequestParams, PostEmployeeResponse } from "../../types/apiV1";

let nextId = 5;

export const apiV1 = (fastify: FastifyInstance) => {
    fastify.get<GetEmployeesRequestParams, GetEmployeesResponse>('/employees', (req, res) => {
        res.send({ employees });
    });
    
    fastify.get<{ Params: GetEmployeeRequestParams }, { Body: GetEmployeeResponse }>(
        '/employees/:id',
        (req, res) => {
            const { id } = req.params;
            const employee = employees.find((e) => e.id === Number(id));

            if (!employee) {
                res.status(404).send({ error: 'NotFound' });
                return;
            }

            res.send({ employee });
        }
    );

    fastify.post<{ Params: PostEmployeeRequestParams, Body: PostEmployeeRequestBody }, { Body: PostEmployeeResponse }>(
        '/employees/:id',
        (req, res) => {
            const { id } = req.params;
            const employee = employees.find((e) => e.id === Number(id));
            const { status, img, name } = req.body;

            if (!employee) {
                res.status(404).send({ error: 'NotFound' });
                return;
            }

            if (status) employee.status = status;
            if (img) employee.img = img;
            if (name) employee.name = name;

            res.send({ employee });
        }
    );

    fastify.post<{ Body: CreateEmployeeRequestBody }, { Body: CreateEmployeeResponse }>('/employees', (req, res) => {
        const employee = {
            id: nextId++,
            ...req.body,
        };

        employees.push(employee);

        res.send({ employee });
    });
}
