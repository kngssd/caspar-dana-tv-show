import removePTags from "./removePTags";

test("remove p tags", () => {
  const testCase =
    "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>";
  const expectedText =
    "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.";
  expect(removePTags(testCase)).toBe(expectedText);
});

test("test pair p tags returning an empty string", () => {
  const testCase = "<p></p>";
  const expectedText = "";
  expect(removePTags(testCase)).toBe(expectedText);
});

test("test removes p tags AND outer white space", () => {
  const testCase = " <p>test</p> ";
  const expectedText = "test";
  expect(removePTags(testCase)).toBe(expectedText);
});

test("test only removes p tags, NOT ><", () => {
  const testCase = "<p>>test<</p>";
  const expectedText = ">test<";
  expect(removePTags(testCase)).toBe(expectedText);
});

test("test only removes OUTER p tags", () => {
  const testCase = "<p><p>test</p></p>";
  const expectedText = "<p>test</p>";
  expect(removePTags(testCase)).toBe(expectedText);
});
