# MARKDOWN API

> A simple note-taking app that lets users upload markdown files, check the grammar,
> save the note, and render it in HTML. The goal of this project is to provide a
> means of handling file uploads in a RESTful API, parse and render markdown files
> using  libraries, and check the grammar of the notes.
> this project is written in JavaScript and represent a completion of project
> challenge from [roadmap.sh] <https://roadmap.sh/projects/markdown-note-taking-app>

## Features

- Upload markdown.
- Validate Grammer.
- Convert markdown to html.
- Save markdown text to .markdown file.

### Technical Stack

- Javascript

#### How to run

- clone and cd into the project.
- Open the project in the terminal.
- `npm install` to install the project dependencies.
- `npm start` to start the project.
- `npm start:dev` to start the project in develpment mode.

#### Dependencies

- `"fastify": "^5.5.0",`
- `"fastify-plugin": "^5.0.1",`

METHOD  |     URL                               | DESCRIPTION

---

GET     | <http://0.0.0.0:4100/markdowns>    | Get a list of all saved markdown files.
POST    | <http://0.0.0.0:4100/save>       | Save a markdown text to a markdown file.
POST    | <http://0.0.0.0:4100/render>       | Render markdown text to html.
POST    | <http://0.0.0.0:4100/check-grammer> | Check grammer of texts.

##### Folder Structure

> /markdown-restapi-fastifyjs
>
> > markdowns
>
> > README.md
>
> > router.plugin.js
>
> > server.js
>
> > package.json
>
> yarn.lock
>
> > .env
>
> > .gitignore
