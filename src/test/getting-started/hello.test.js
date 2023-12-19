// hello.test.js
import assert from "node:assert";
import test from "node:test";

test("1と2の合計は3です", () => {
  assert.strictEqual(1 + 2, 3);
});
