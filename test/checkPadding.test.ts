import { checkNumberPadding } from "../src/utils/checkPadding";

describe("checkNumberPadding", () => {
  // Consistent Padding
  describe("Consistent Padding with Zeros", () => {
    it('should return 3 for ["001", "002"]', () => {
      expect(checkNumberPadding(["001", "002"])).toBe(3);
    });

    it('should return 4 for ["0001", "0002", "0003"]', () => {
      expect(checkNumberPadding(["0001", "0002", "0003"])).toBe(4);
    });

    it('should return 2 for ["01", "02"]', () => {
      expect(checkNumberPadding(["01", "02"])).toBe(2);
    });

    it('should return 2 for ["01"]', () => {
      expect(checkNumberPadding(["01"])).toBe(2);
    });
  });

  // Inconsistent Padding
  describe("Inconsistent Padding", () => {
    it('should return -1 for ["01", "002"]', () => {
      expect(checkNumberPadding(["01", "002"])).toBe(-1);
    });

    it('should return -1 for ["01", "2"]', () => {
      expect(checkNumberPadding(["01", "2"])).toBe(-1);
    });

    it('should return -1 for ["001", "1"]', () => {
      expect(checkNumberPadding(["001", "1"])).toBe(-1);
    });

    it('should return -1 for ["001", "02"]', () => {
      expect(checkNumberPadding(["001", "02"])).toBe(-1);
    });

    it('should return -1 for ["01", "002", "3"]', () => {
      expect(checkNumberPadding(["01", "002", "3"])).toBe(-1);
    });

    it('should return -1 for ["001", "02", "3"]', () => {
      expect(checkNumberPadding(["001", "02", "3"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "3"]', () => {
      expect(checkNumberPadding(["001", "002", "3"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "03"]', () => {
      expect(checkNumberPadding(["001", "002", "03"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "003", "4"]', () => {
      expect(checkNumberPadding(["001", "002", "003", "4"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "003", "04"]', () => {
      expect(checkNumberPadding(["001", "002", "003", "04"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "003", "004", "5"]', () => {
      expect(checkNumberPadding(["001", "002", "003", "004", "5"])).toBe(-1);
    });

    it('should return -1 for ["001", "002", "003", "004", "05"]', () => {
      expect(checkNumberPadding(["001", "002", "003", "004", "05"])).toBe(-1);
    });
  });

  // No Padding
  describe("No Padding", () => {
    it('should return 1 for ["1", "2", "999"]', () => {
      expect(checkNumberPadding(["1", "2", "999"])).toBe(1);
    });

    it('should return 1 for ["1", "2", "3"]', () => {
      expect(checkNumberPadding(["1", "2", "3"])).toBe(1);
    });

    it('should return 1 for ["1"]', () => {
      expect(checkNumberPadding(["1"])).toBe(1);
    });
  });

  // Mixed Padding and No Padding
  describe("Mixed Padding and No Padding", () => {
    it('should return 2 for ["01", "03", "11111"]', () => {
      expect(checkNumberPadding(["01", "03", "11111"])).toBe(2);
    });
    it('should return 3 for ["001", "002", "9999"]', () => {
      expect(checkNumberPadding(["001", "002", "9999"])).toBe(3);
    });
  });

  // Inconclusive Padding
  describe("Inconclusive Padding", () => {
    it('should return -3 for ["999", "9999"]', () => {
      expect(checkNumberPadding(["999", "9999"])).toBe(-3);
    });

    it('should return -2 for ["99", "999", "9999"]', () => {
      expect(checkNumberPadding(["99", "999", "9999"])).toBe(-2);
    });

    it('should return -4 for ["1000", "10000"]', () => {
      expect(checkNumberPadding(["1000", "10000"])).toBe(-4);
    });
  });

  // Empty Input
  describe("Empty Input", () => {
    it("should return 0 for []", () => {
      expect(checkNumberPadding([])).toBe(0);
    });
  });

  // Invalid Input
  describe("Invalid Input", () => {
    it("should throw an error for invalid input", () => {
      expect(() => checkNumberPadding(["001", "abc"])).toThrow();
    });

    it("should throw an error for invalid input", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(() => checkNumberPadding([123, 456] as any)).toThrow();
    });
  });
});
