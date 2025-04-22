import { checkNumberPadding } from "./utils/checkPadding";

interface TestCase {
  label: string;
  testCase: string[];
  expected: number;
}

const main = () => {
  const testCases: TestCase[] = [
    {
      label: "Consistent padding with zeros",
      testCase: ["001", "002"],
      expected: 3,
    },
    {
      label: "Consistent padding with zeros",
      testCase: ["001", "002", "9999"],
      expected: 3,
    },
    {
      label: "Consistent padding with zeros",
      testCase: ["0018", "0028", "9999"],
      expected: 4,
    },
    { label: "No padding", testCase: ["1", "2", "999"], expected: 1 },
    { label: "Inconclusive padding", testCase: ["999", "9999"], expected: -3 },
    {
      label: "Inconclusive padding",
      testCase: ["99", "999", "9999"],
      expected: -2,
    },
    { label: "Inconsistent padding", testCase: ["01", "002"], expected: -1 },
    { label: "Empty input", testCase: [], expected: 0 },
  ];

  for (const testCase of testCases) {
    try {
      const result = checkNumberPadding(testCase.testCase);
      const passed = result === testCase.expected;
      const status = passed ? "PASSED" : "FAILED";
      console.log(
        `${testCase.label}: ${JSON.stringify(testCase.testCase)} -> ${result} (${status})`,
      );
      if (!passed) {
        console.error(`  Expected: ${testCase.expected}`);
      }
    } catch (error) {
      console.error(
        `${testCase.label}: ${JSON.stringify(testCase.testCase)} -> ERROR (${error})`,
      );
    }
  }
};

main();
