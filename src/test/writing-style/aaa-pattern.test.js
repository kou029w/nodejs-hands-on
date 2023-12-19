import assert from "node:assert";
import test from "node:test";

test("正しくJSONをパースできる", () => {
  // 準備
  const json = `{ "name": "Claude Monet", "birth": "1840" }`;

  // 実行
  const parsed = JSON.parse(json);

  // 検証
  assert.deepStrictEqual(parsed, { name: "Claude Monet", birth: "1840" });
});
