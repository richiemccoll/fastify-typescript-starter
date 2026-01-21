
import type { FastifyPluginAsync } from 'fastify';
import swagger from './plugins/external/swagger.ts';
import healthCheck from './routes/health/index.ts';
import config from './config.ts';


const buildApp: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.decorate('config', config);

  await swagger(fastify);

  await fastify.register(healthCheck);
};

export default buildApp;

export { buildApp };
