const getLeadingZeros = (str: string): string | null => {
  // Match one or more leading zeros at the beginning of the string.
  const match = str.match(/^0+/);
  return match ? match[0] : null;
};

const isIterableEmpty = (iterable: Iterable<string>): boolean => {
  for (let _ of iterable) return false;
  return true;
};

const isValidInput = (intStrs: Iterable<string>): boolean => {
  for (const str of intStrs) {
    // Check if the input is a string and contains only digits.
    if (typeof str !== "string" || !/^\d+$/.test(str)) {
      return false;
    }
  }
  return true;
};

export function checkNumberPadding(intStrs: Iterable<string>): number {
  if (!isValidInput(intStrs)) {
    throw new Error(
      "Invalid input: Input must be an iterable of strings containing only digits."
    );
  }
  if (isIterableEmpty(intStrs)) return 0; //nothing to observe

  let observedPaddingLength: number | null = null;
  let consistent = true;
  let hasPadding = false;
  let minUnpaddedLength: number | null = null;

  for (const str of intStrs) {
    const leadingZeros = getLeadingZeros(str);
    const paddingLength = leadingZeros ? leadingZeros.length : 0;
    const unpaddedLength = str.length - paddingLength;

    if (paddingLength > 0) {
      hasPadding = true;
      if (observedPaddingLength === null) {
        observedPaddingLength = str.length;
      } else if (observedPaddingLength !== str.length) {
        consistent = false;
      }
    } else {
      if (minUnpaddedLength === null) {
        minUnpaddedLength = str.length;
      } else {
        minUnpaddedLength = Math.min(minUnpaddedLength, str.length);
      }
    }
  }

  if (hasPadding) {
    if (consistent && observedPaddingLength !== null) {
      return observedPaddingLength;
    }
    return -1; // inconsistent padding
  } else {
    if (minUnpaddedLength === null) return 0;
    // If minUnpaddedLength is greater than 1, it means there's no padding, but we can't be sure if padding was intended.
    // Return a negative number to indicate this uncertainty. Otherwise, return 1 to indicate no padding.
    return minUnpaddedLength > 1 ? -minUnpaddedLength : 1;
  }
}
