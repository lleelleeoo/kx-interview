import Fastify from 'fastify';
import { apiV1 } from './apiV1/apiV1';

const fastify = Fastify();

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
