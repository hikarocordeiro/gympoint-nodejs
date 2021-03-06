<h1 align="center">
    Gympoint - NodeJS
</h1>

<h4 align="center">
  You will need the <a href="https://github.com/hikarocordeiro/gympoint-reactjs">ReactJS</a> or the <a href="https://github.com/hikarocordeiro/gympoint-react-native">React Native</a> version to access this API.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hikarocordeiro/gympoint-nodejs.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hikarocordeiro/gympoint-nodejs.svg">

  <a href="https://www.codacy.com/manual/hikarocordeiro/gympoint-nodejs?utm_source=github.com&utm_medium=referral&utm_content=hikarocordeiro/gympoint-nodejs&utm_campaign=Badge_Grade_Dashboard">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/be94850f95634dc8ba003ccda80e60f9.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hikarocordeiro/gympoint-nodejs">
  <a href="https://github.com/hikarocordeiro/gympoint-nodejs/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hikarocordeiro/gympoint-nodejs.svg">
  </a>

  <a href="https://github.com/hikarocordeiro/gympoint-nodejs/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/hikarocordeiro/gympoint-nodejs.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/hikarocordeiro/gympoint-nodejs.svg">
</p>

<p align="center">
  <a href="#gear-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :gear: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

-  [ReactJS](https://reactjs.org/)
-  [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
-  [bee-queue](https://github.com/bee-queue/bee-queue)
-  [cors](https://github.com/expressjs/cors)
-  [date-fns](https://date-fns.org/)
-  [dotenv](https://github.com/motdotla/dotenv)
-  [express](https://github.com/expressjs/express)
-  [express-handlebars](https://github.com/ericf/express-handlebars)
-  [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
-  [nodemailer](https://nodemailer.com/about/)
-  [nodemailer-express-handlebars](https://github.com/yads/nodemailer-express-handlebars)
-  [pg](https://github.com/brianc/node-postgres/tree/master/packages/pg)
-  [pg-hstore](https://github.com/scarney81/pg-hstore)
-  [sequelize](https://sequelize.org/)
-  [sequelize-cli](https://github.com/sequelize/cli)
-  [nodemon](https://github.com/remy/nodemon)
-  [sucrase](https://github.com/alangpierce/sucrase)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

### Before Install

You will need the the following services already configured and running:

* [MongoDB](https://www.mongodb.com/)
* [Redis](https://redis.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Sentry](https://sentry.io/)

In addition to the items above, you will also need an email service available.

### Installing

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] and [Yarn][yarn] installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/hikarocordeiro/gympoint-nodejs.git
```

Rename the .env.example file to .env and edit the file with the required information.

After everything is configured, you must run the migrations:
```bash
$ yarn sequelize db:migrate
```

And the seeders:
```bash
$ yarn sequelize db:seed:all
```

The system can be run in development mode with the command below:
```bash
# Development mode
$ yarn dev
```

OR you can generate a build and run
```bash
# Generate a build
$ yarn build

# Run build
$ yarn start
```

To start the mail server, it is necessary to open a new terminal and execute the command:
```bash
$ yarn queue
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/hikarocordeiro/gympoint-nodejs/blob/master/LICENSE) for more information.

---

Made with ♥ by Hikaro Cordeiro :wave: [Get in touch!](https://www.linkedin.com/in/hikaro-cordeiro/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
