import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { apiV1 } from './apiV1/apiV1';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify();

fastify.register(fastifyStatic, {
    root: join(__dirname, 'mockData/static'),
    prefix: '/static',
});

fastify.get('/api/health', async (req, res) => {
    res.send({ status: 'ok', uptime: process.uptime() });
});

fastify.register(apiV1, { prefix: '/api/v1' });

try {
    fastify.listen({ port: 3000 });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
