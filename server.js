import Fastify from "fastify";
import routerPlugin from "./router.plugin.js";

const app = Fastify({
  logger: true,
  routerOptions: {
    ignoreTrailingSlash: true,
    caseSensitive: false,
  },
});

app.register(routerPlugin);

app.listen({ host: "0.0.0.0", port: 4100 });
