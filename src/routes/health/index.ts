import type { FastifyPluginCallback } from 'fastify';

const register: FastifyPluginCallback = (server) => {
  const successSchema = {};

  server.get('/health', {
    schema: {
      response: {
        200: successSchema,
      },
    },
    handler: async (_, reply) => {
      reply.send({ status: 'ok' });
    },
  });
};

export default register;
