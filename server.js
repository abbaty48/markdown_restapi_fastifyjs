import Fastify from "fastify";

const app = Fastify({
  logger: true,
  routerOptions: {
    ignoreTrailingSlash: true,
    caseSensitive: false,
  },
});

app.listen({ host: "0.0.0.0", port: 4100 });
