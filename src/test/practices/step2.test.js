// isLeapYear.test.js
import assert from "node:assert";
import test from "node:test";
import isLeapYear from "./isLeapYear.js";

test("西暦年号が4で割り切れる年はうるう年", () => {
  assert.strictEqual(isLeapYear(2024), true);
  assert.strictEqual(isLeapYear(2028), true);
  assert.strictEqual(isLeapYear(2032), true);
});

test("西暦年号が4で割り切れない年はうるう年でない", () => {
  assert.strictEqual(isLeapYear(2021), false);
  assert.strictEqual(isLeapYear(2022), false);
  assert.strictEqual(isLeapYear(2023), false);
});

/** TODO:
ただし、西暦年号が100で割り切れる年はうるう年でない
  たとえば、西暦2100年、2200年、2300年は100で割り切れるので、うるう年ではありません。
ただし、西暦年号が400で割り切れる年はうるう年
  たとえば、西暦2000年、2400年、2800年は400で割り切れるので、うるう年です。
*/
