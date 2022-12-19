function horspool(pattern, text) {
  let m = pattern.length;
  let n = text.length;
  let skip = {};

  // Preprocessing
  for (let i = 0; i < m; i++) {
    skip[pattern.charAt(i)] = m - i - 1;
  }

  // Searching
  let i = m - 1;
  while (i < n) {
    let j = 0;
    while (j < m && text.charAt(i - j) === pattern.charAt(m - 1 - j)) {
      j++;
    }
    if (j === m) {
      return i - m + 1; // pattern found
    }
    i += skip[text.charAt(i)] || m;
  }

  return -1; // pattern not found
}
