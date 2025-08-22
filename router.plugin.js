import fastifyPlugin from "fastify-plugin";
import { writeFile, opendir } from "node:fs/promises";
import MarkdownIt from "markdown-it";
import { join } from "node:path";
import Typojs from "typo-js";

export default fastifyPlugin(async (fastify) => {
  fastify
    .get("/markdowns", async (req) => {
      try {
        const dirs = [];
        const dir = await opendir(join(process.cwd(), "markdowns"));
        for await (const folder of dir) {
          dirs.push(folder.name);
        }
        return dirs;
      } catch (error) {
        return [];
      }
    })
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
    .post("/save", async (req) => {
      try {
        const timestamp = new Date(Date.now()).toISOString();
        const markdown = req.body.note;
        let filename = req.body.filename
          .replace(/\s+/g, "-")
          .toLowerCase()
          .trim();
        filename = filename.padStart(
          filename.length + timestamp.length,
          timestamp,
        );
        filename = filename.padEnd(filename.length + 3, ".md");

        const file = join(process.cwd(), "markdowns", filename);
        await writeFile(file, markdown, "utf-8");

        return true;
      } catch (error) {
        return false;
      }
    })
    .post("/render", async (req) => {
      const note = req.body.note;
      const md = new MarkdownIt();
      return md.render(note);
    });
});
