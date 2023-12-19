// isLeapYear.test.js
import assert from "node:assert";
import test from "node:test";
import isLeapYear from "./isLeapYear.js";

test("西暦年号が4で割り切れる年はうるう年", () => {
  assert.strictEqual(isLeapYear(2024), true);
});
