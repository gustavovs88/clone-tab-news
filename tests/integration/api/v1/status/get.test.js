import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import status from "#api/v1/status/index.js";

describe("GET to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const body = await response.json();
  it("should return 200", () => {
    assert.equal(response.status, 200);
    const parsedUpdatedAt = new Date(body.updated_at).toISOString();
    assert.equal(body.updated_at, parsedUpdatedAt);
    assert.equal(body.dependencies.database.version, "16.2");
    assert.equal(body.dependencies.database.max_connections, 100);
    assert.equal(body.dependencies.database.opened_connections, 1);
  });
});
