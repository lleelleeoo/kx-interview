import { apiV1 } from './apiV1';
import { FastifyInstance } from 'fastify';
import { employees } from '../mockData/employees';
import Fastify from 'fastify';

describe('apiV1', () => {
    let fastify: FastifyInstance;

    beforeEach(async () => {
        fastify = await Fastify();
        apiV1(fastify);
    });

    it('GET /employees returns all employees', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/employees',
        });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(employees);
    });

    it('GET /employees/:id returns a single employee by id', async () => {
        const employee = employees[0];
        const response = await fastify.inject({
            method: 'GET',
            url: `/employees/${employee.id}`,
        });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(employee);
    });

    it('GET /employees/:id returns 404 if employee not found', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/employees/999',
        });

        expect(response.statusCode).toBe(404);
        expect(response.json()).toEqual({ error: 'NotFound' });
    });

    it('POST /employees/:id updates an employee', async () => {
        const employee = {...employees[0]};
        const updates = { status: 'onVacation' };
        const response = await fastify.inject({
            method: 'POST',
            url: `/employees/${employee.id}`,
            payload: updates,
        });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ ...employee, ...updates });
    });

    it('POST /employees/:id returns 404 if employee not found', async () => {
        const response = await fastify.inject({
            method: 'POST',
            url: '/employees/999',
            payload: { status: 'onVacation' },
        });

        expect(response.statusCode).toBe(404);
        expect(response.json()).toEqual({ error: 'NotFound' });
    });

    it('POST /employees creates a new employee', async () => {
        const newEmployee = { name: 'New Employee', status: 'working', img: 'new-employee' };
        const response = await fastify.inject({
            method: 'POST',
            url: '/employees',
            payload: newEmployee,
        });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ employee: { id: 5, ...newEmployee } });
    });
});
