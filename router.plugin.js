import fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(async (fastify) => {
  fastify
    .get("/markdowns", async (req) => { })
    .post("/check-grammer", async (req) => { })
    .post("/save", async (req) => { })
    .post("/render", async (req) => { });
});
