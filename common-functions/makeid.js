function makeID(str) {
  str: typeof String;

  let s = str.replaceAll(" ", "_");
  if (s.length > 15) s = s.substring(0, 15);
  return s;
}

module.exports = { makeID };
