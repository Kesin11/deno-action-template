import { summary } from "npm:@actions/core@1.10.1";

export async function writeSummary(header: string, message: string) {
  const md = `## ${header}\n\n${message}`;
  throw new Error("Raise error");
  await summary.addRaw(md).write();
}
