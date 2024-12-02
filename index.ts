(async function () {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.log("You must provide exactly one puzzle to solve. Example usage:");
    console.log("  npm run solve 01");
    return;
  }

  let puzzle = args[0];
  if (puzzle.length === 1) {
    puzzle = `0${puzzle}`;
  }

  if (puzzle.length !== 2) {
    console.log(`Invalid puzzle provided (${puzzle}). Example usage:`);
    console.log("  npm run solve 01");
    return;
  }

  const solution = await import(`./puzzles/${puzzle}/solution.ts`);
  solution.default();
})();
