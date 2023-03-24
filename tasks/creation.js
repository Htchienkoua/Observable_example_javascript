import { from, tap, filter, map } from "rxjs";
/**
 * There's an array of numbers.
 * Write an observable, that takes the array as an input stream and only logs the ones that are > 50.
 * The output should be a stream of strings;
 */
const ids = new Array(50).fill("").map(() => {
  const rand = Math.random() * 100;
  return Math.floor(rand);
});
console.log(`Input: ${ids}`);
