# Sundae Interview Project
This is the base of a project that I was asked to prepare for an interview at Sundae. https://sundae.com/

# Description
This is a small API that can add simple user accounts and properties. There was a requirement for Kafka, so I had it queue messages to trigger a welcome email.

# Usage
`npm install`
`docker-compose up`

Explore the app to find the available routes. You can add an account by using this endpoint - `localhost:3000/account` with the body 
``` JSON
{
    "firstName": "Remmy",
    "lastName": "Bucksaplenty",
    "email": "remmy@money.com"
}
```

# Requirements from Sundae
What to expect:
For the 2 hour live code session, you will be creating a small Node.js application that integrates
database reading/writing, produces/consumes Kafka messages, and pulls data from external
HTTP sources.
During the session, we will be giving you structured guidance on what functionality needs to be
implemented.
How to prepare:
- Prepare your local development environment so that you:
- Can run Node.js, and make HTTP requests to your local Node.js instance (using
curl, or some other tool)
- Have an available DB or datastore you can access for reading and writing. It can
be local or on the internet.
- Can set-up and use Kafka locally
- Can share your screen with the interviewer (via Google Meeting)

Tips:
- Feel free to use any kind of DB or datastore you feel comfortable with. We personally
like Postgres. Please note, you will be given table schemas during the session, and will
be asked to create the tables in your DB (if needed). You are free to use any NoSQL
DBs as well.
- When possible, we recommend using some kind of ORM to make things easier, such as
Sequelize, TypeORM, or Objection.js. If applicable, you’ll be creating and setting
these up during the session.
- You will be free to use any kind of framework and libraries as you see fit. For example,
Express or Koa.
- We recommend using docker or docker-compose to simplify setting up any necessary
infrastructure.
- We like TypeScript, so it’s a bonus if you use it - but this is not required!
- You will have the freedom to ask questions and look up documentation as you need to,
so don’t feel pressured to memorize every little set-up detail for your application or any
libraries.