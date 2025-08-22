import fastifyPlugin from "fastify-plugin";
import Typojs from "typo-js";

export default fastifyPlugin(async (fastify) => {
  fastify
    .get("/markdowns", async (req) => { })
    .post("/check-grammer", async (req) => {
      const dictionary = new Typojs("en_US");
      const misspells = [];
      const grammer = String(req.body.note);
      const words = grammer.split(/\s/);

      words.forEach((word, index) => {
        if (!dictionary.check(word)) {
          if (!misspells.some((misspell) => misspell.word === word)) {
            const recommendations = dictionary.suggest(word);
            misspells.push({ word, index, recommendations });
          }
        }
      });

      if (misspells.length > 0) {
        return misspells;
      }
      return "You are clean.";
    })
    .post("/save", async (req) => { })
    .post("/render", async (req) => { });
});
