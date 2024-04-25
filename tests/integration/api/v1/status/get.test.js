import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import status from "#api/v1/status/index.js";

describe("GET to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  it("should return 200", () => {
    assert.equal(response.status, 200);
  });
});
