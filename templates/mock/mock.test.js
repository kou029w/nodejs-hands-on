import assert from "node:assert";
import test from "node:test";

const mockCallback = test.mock.fn();

["い", "ろ", "は"].forEach(mockCallback);

test("関数は3回呼ばれます", () => {
  assert.strictEqual(mockCallback.mock.calls.length, 3);
});

test("最初の呼び出しのときの第1引数は「い」です", () => {
  assert.strictEqual(mockCallback.mock.calls[0].arguments[0], "い");
});
