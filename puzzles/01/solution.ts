import { loadData } from "@/utils/data.js";

export default async function main() {
  const data = await loadData({ dirname: import.meta.dirname });
  const [leftList, rightList] = splitLists(data);

  // Part 1
  let part1 = 0;
  for (let i = 0; i < leftList.length; i++) {
    part1 += Math.abs(leftList[i] - rightList[i]);
  }

  console.log(`Part 1 solution: ${part1}`);

  // Part 2
  let part2 = 0;
  for (const value of leftList) {
    const count = rightList.filter((v) => v === value).length;
    part2 += value * count;
  }

  console.log(`Part 2 solution: ${part2}`);
}

function splitLists(lines: string[]) {
  const left = [];
  const right = [];
  for (const line of lines) {
    const entries = line.split(/\s+/).filter(Boolean).map(Number);
    left.push(entries[0]);
    right.push(entries[1]);
  }
  left.sort();
  right.sort();
  return [left, right];
}
