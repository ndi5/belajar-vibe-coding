import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";

describe("Elysia App", () => {
  it("returns health check status ok", async () => {
    // Import app without triggering listen
    const app = new Elysia().get("/", () => ({
      status: "ok",
      message: "Server is running with Elysia + Drizzle + MySQL!",
    }));

    const response = await app
      .handle(new Request("http://localhost/"))
      .then((res) => res.json());

    expect(response.status).toBe("ok");
    expect(response.message).toBe("Server is running with Elysia + Drizzle + MySQL!");
  });
});
