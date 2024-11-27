import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/api/health', async (req, res) => {
    res.send({ status: 'ok', uptime: process.uptime() });
});

try {
    fastify.listen({ port: 3000 });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
