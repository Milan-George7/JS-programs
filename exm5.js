function Anagram(a, b) {
    // Check if the lengths of the strings are equal
    if (a.length !== b.length) {
      return false;
    }
    // Convert the strings to arrays of characters and sort them
    const sortA = a.split('').sort().join('');
    const sortB = b.split('').sort().join('');
    // Compare the sorted strings
    return sortA === sortB;
  }
  // Example usage:
  const a = "dear";
  const b = "read";
  if (Anagram(a, b)) {
    console.log(`${a} is an anagram of ${b}`);
  } else {
    console.log(`${a} is not an anagram of ${b}`);
  }