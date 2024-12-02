import fs from "node:fs/promises";
import path from "node:path";

export function loadData(options: {
  dirname: string;
  filename?: string;
  parseLines?: true;
}): Promise<string[]>;
export function loadData(options: {
  dirname: string;
  filename?: string;
  parseLines?: false;
}): Promise<string>;
export function loadData(options: {
  dirname: string;
  filename?: string;
  parseLines?: boolean;
}): Promise<string | string[]>;
export async function loadData({
  dirname,
  filename = "data",
  parseLines = true,
}: {
  dirname: string;
  filename?: string;
  parseLines?: boolean;
}) {
  const buf = await fs.readFile(path.resolve(dirname, filename));
  const str = buf.toString();
  if (parseLines) return str.split("\n").filter(Boolean);
  return str;
}
