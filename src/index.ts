import { Elysia, t } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server is running with Elysia + Drizzle + MySQL!",
    timestamp: new Date().toISOString(),
  }))
  .group("/users", (app) =>
    app
      .get("/", async () => {
        try {
          const allUsers = await db.select().from(users);
          return { success: true, data: allUsers };
        } catch (error) {
          return {
            success: false,
            message: "Failed to fetch users. Ensure MySQL connection is active.",
            error: error instanceof Error ? error.message : String(error),
          };
        }
      })
      .post(
        "/",
        async ({ body, set }) => {
          try {
            const result = await db.insert(users).values({
              name: body.name,
              email: body.email,
            });
            set.status = 201;
            return { success: true, message: "User created successfully", result };
          } catch (error) {
            set.status = 500;
            return {
              success: false,
              message: "Failed to create user. Ensure MySQL connection is active.",
              error: error instanceof Error ? error.message : String(error),
            };
          }
        },
        {
          body: t.Object({
            name: t.String(),
            email: t.String({ format: "email" }),
          }),
        }
      )
  )
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
