This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## We use SQLite in the app, so we use-

follow this https://docs.turso.tech/sdk/ts/quickstart

### Install the Turso CLI (brew install tursodatabase/tap/turso)

### Signup to Turso Cloud (turso auth signup)

### Create a Database (turso db create my-db)

### check for the database created (turso db show my-db)

### check for the database url created (turso db show --url my-db)

### Get the database authentication token: (turso db tokens create <database-name>)

### Now store within env

TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=

## We use drizzle (ORM) to access truso (database of sqlite) and perform all the actions easily from codebase. ex: it's a kind of mysql2(we use to access databse from node).

follow this https://docs.turso.tech/sdk/ts/orm/drizzle

### Install Drizzle and the libSQL SDK

    npm i drizzle-orm @libsql/client dotenv
    npm i -D drizzle-kit

### Create a Drizzle schema

    db/schema.ts

### Configure Drizzle Kit

    Create the file drizzle.config.ts in the root of your project with the following:
    drizzle.config.ts

### Connect Drizzle with libSQL Node.js/Serverless

### Database migrations

#### npm run db:generate

    ---generating the sql equivalent queries based on the schema.ts file

#### npm run db:migrate

    ---geberate the table based on the queries generated via 'db:generate'.

### data seeding to the table

    --- create a file 'db.seed.ts' and give the data to seed
    --- run the file (db.seed.ts) via terminal or script
