import assert from "node:assert";
import test from "node:test";

test("Object.assign()でプロパティを代入できる", () => {
  const data = { name: "Claude Monet" };
  Object.assign(data, { birth: "1840" });
  assert.deepStrictEqual(data, { name: "Claude Monet", birth: "1840" });
});
