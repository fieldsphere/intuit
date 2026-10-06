import assert from "node:assert/strict";
import test from "node:test";
import { exportTaxForm } from "./tax-form-export.ts";

test("truncates multi-byte taxpayer names on character boundaries", () => {
  const accented = "é".repeat(80);
  const exported = exportTaxForm({ taxpayerName: accented }).taxpayerName;

  assert.equal(exported, "é".repeat(64));
  assert.equal(exported.includes("\uFFFD"), false);
  assert.equal(Buffer.from(exported, "utf8").toString("utf8"), exported);

  // 63 ASCII bytes plus a 2-byte character is where a 64-byte slice splits.
  const straddling = `${"A".repeat(63)}ééé`;
  const straddled = exportTaxForm({ taxpayerName: straddling }).taxpayerName;

  assert.equal(straddled, `${"A".repeat(63)}é`);
  assert.equal(straddled.includes("\uFFFD"), false);

  // 3-byte characters do not divide 64, so a byte cut leaves a partial sequence.
  const cjk = "李".repeat(70);
  const cjkName = exportTaxForm({ taxpayerName: cjk }).taxpayerName;

  assert.equal(cjkName, "李".repeat(64));
  assert.equal(cjkName.includes("\uFFFD"), false);
  assert.equal(Buffer.from(cjkName, "utf8").toString("utf8"), cjkName);

  const withinLimit = "李".repeat(30);
  assert.equal(exportTaxForm({ taxpayerName: withinLimit }).taxpayerName, withinLimit);
});
