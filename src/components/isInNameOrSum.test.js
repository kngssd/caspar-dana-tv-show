import isInNameOrSum from "./isInNameOrSum";

test("if search term is empty return true", () => {
  expect(isInNameOrSum(testEpisode, "")).toBe(true);
});

test("if search term is in name return true", () => {
  expect(isInNameOrSum(testEpisode, "Winter")).toBe(true);
});

test("if search term is in summary return true", () => {
  expect(isInNameOrSum(testEpisode, "Stark")).toBe(true);
});

test("if search term is not in name or summary return false", () => {
  expect(isInNameOrSum(testEpisode, "Caspar")).toBe(false);
});

test("if search is case insensitive return true", () => {
  expect(isInNameOrSum(testEpisode, "WINTER")).toBe(true);
  expect(isInNameOrSum(testEpisode, "winter")).toBe(true);
  expect(isInNameOrSum(testEpisode, "WIntER")).toBe(true);
});

const testEpisode = {
  id: 4952,
  url: "https://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
  name: "Winter is Coming",
  season: 1,
  number: 1,
  type: "regular",
  airdate: "2011-04-17",
  airtime: "21:00",
  airstamp: "2011-04-18T01:00:00+00:00",
  runtime: 60,
  rating: { average: 8.2 },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_landscape/478/1195111.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/478/1195111.jpg",
  },
  summary:
    "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
  _links: {
    self: { href: "https://api.tvmaze.com/episodes/4952" },
    show: {
      href: "https://api.tvmaze.com/shows/82",
      name: "Game of Thrones",
    },
  },
};
