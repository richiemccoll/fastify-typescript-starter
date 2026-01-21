import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import type { Config } from '../../config.ts';

/**
 * This plugins adds public API swagger documentation
 */
export default fp(async fastify => {
  const config = fastify.getDecorator<Config>('config');
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: config.SERVICE_NAME,
        version: '0.0.1',
      },
    },
    swagger: {
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  await fastify.register(swaggerUI, {
    routePrefix: '/documentation',
  });
});
