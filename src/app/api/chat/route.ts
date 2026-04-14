import {
  streamText,
  UIMessage,
  convertToModelMessages,
  tool,
  stepCountIs,
} from "ai";
import { groq } from "@ai-sdk/groq";
import { z } from "zod";
import { db } from "@/db/db";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const SYSTEM_PROMPT = `
  You are an expert SQL assistant that helps users to query their database using natural language. 

  ${new Date().toLocaleString("sv-SE")}
  You have access yto the following tools:
  1. schema tool - call this tool to get the databse schema which will help you to write SQL query.
  2. db tool - call this tool to query the database.

  Rules:
  - Generate only select queries (no INSERT, UPDATE, DELETE, DROP etc.)
  - Always use the schema provided by the schema tool.
  - Pass in valid SQL syntax to the db tool.
  - IMPORTANT: To query database call db tool, don't return just SQL query.

  Always respond in a helpful, conversational tone while being technically accurate.
  `;

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    messages: await convertToModelMessages(messages),
    system: SYSTEM_PROMPT,
    stopWhen: stepCountIs(5),
    tools: {
      schema: tool({
        description: "call this tool to get the database schema",
        inputSchema: z.object({}),
        execute: async () => {
          return `CREATE TABLE products (
	id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	name text NOT NULL,
	category text NOT NULL,
	price real DEFAULT 0 NOT NULL,
	stock integer NOT NULL,
	created_at text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE sales (
	id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	product_id integer NOT NULL,
	quantity integer NOT NULL,
	total_amount real NOT NULL,
	sale_date text DEFAULT CURRENT_TIMESTAMP,
	customer_name text NOT NULL,
	region text NOT NULL,
	FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE no action ON DELETE no action
);
`;
        },
      }),
      db: tool({
        description: "call this tool to query a database",
        inputSchema: z.object({
          query: z.string().describe("SQL query to execute on the database"),
        }),
        execute: async ({ query }) => {
          //in reality we call db here
          return await db.run(query);
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}

//1. schema tool - call this tool to get the databse schema which will help you to write SQL query.
//- Always use the schema provided by the schema tool.
