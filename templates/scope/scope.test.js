import assert from "node:assert";
import { after, afterEach, before, beforeEach, describe, it } from "node:test";

/*
 * 実行順序:
 *   トップ - before → グループ1 - before
 *     → トップ - beforeEach → グループ1 - beforeEach
 *       → グループ1 - test 1
 *     → トップ - afterEach → グループ1 - afterEach
 *     → トップ - beforeEach → グループ1 - beforeEach
 *       → グループ1 - test 2
 *     → トップ - afterEach → グループ1 - afterEach
 *   → グループ1 - after → トップ - after
 */

before(() => console.log("トップ - before"));
after(() => console.log("トップ - after"));
beforeEach(() => console.log("トップ - beforeEach"));
afterEach(() => console.log("トップ - afterEach"));

describe("グループ1", () => {
  before(() => console.log("グループ1 - before"));
  after(() => console.log("グループ1 - after"));
  beforeEach(() => console.log("グループ1 - beforeEach"));
  afterEach(() => console.log("グループ1 - afterEach"));

  it("グループ1 - test 1", () => {
    // ...
  });

  it("グループ1 - test 2", () => {
    // ...
  });
});
