import assert from "node:assert";
import test from "node:test";

const fetchData = () => Promise.resolve(42);

test("データは42", async () => {
  const data = await fetchData();
  assert.strictEqual(data, 42);
});
