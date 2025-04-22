import { checkNumberPadding } from "./utils/checkPadding";

const main = () => {
  const testCases = [
    ["001", "002"], // padding 3
    ["001", "002", "9999"], // padding 3
    ["0018", "0028", "9999"], // padding 4
    ["1", "2", "999"], // padding 1
    ["999", "9999"], // padding -3
    ["99", "999", "9999"], // padding -2
    ["01", "002"], // padding -1
    [], // padding 0
  ];

  for (const testCase of testCases) {
    console.log(checkNumberPadding(testCase));
  }
}

main();
