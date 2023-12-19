import assert from "node:assert";
import test from "node:test";

test("2と2の和は5ではない", () => {
  assert.notStrictEqual(2 + 2, 5);
});
