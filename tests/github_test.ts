import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import { writeSummary } from "../src/github.ts";

const tempFilePath = "/tmp/summary.md";
Deno.env.set("GITHUB_STEP_SUMMARY", tempFilePath);
await Deno.open(tempFilePath, { create: true, write: true });
await Deno.truncate(tempFilePath);

Deno.test("github", async (t) => {
  await t.step("write GITHUB_SUMMARY", async () => {
    await writeSummary("test", "This is a test summary");

    const actual = await Deno.readTextFile(
      Deno.env.get("GITHUB_STEP_SUMMARY")!,
    );
    assertEquals(actual, "## test\n\nThis is a test summary");
  });
});
