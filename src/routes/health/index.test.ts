import Fastify from "fastify";
import assert from "node:assert/strict";
import { before, describe, test } from "node:test";
import { buildApp } from "../../app.ts";

const RESOURCE_URI = "/health";

let fastify: ReturnType<typeof Fastify>;

describe(`${RESOURCE_URI}`, () => {
  before(async () => {
    fastify = Fastify();
    await fastify.register(buildApp);
  });

  test("it returns 200", async () => {
    const res = await fastify.inject({
      method: "GET",
      url: "/health",
    });
    assert.equal(res.statusCode, 200);
  });
});
