import React from "react";
import episodes from "./data/gameOfThronesEpisodes.json";
import EpisodeCard from "./components/EpisodeCard";

export default function TVShowsApp() {
  const episodeCards = episodes.map((episode) => (
    <EpisodeCard
      key={episode.id}
      epTitle={episode.name}
      season={episode.season}
      episodeNum={episode.number}
      episodeMedImg={episode.image.medium}
      epSum={episode.summary}
    />
  ));

  const [episodesToDisplay, setEpisodesToDisplay] =
    React.useState(episodeCards);

  return (
    <main className="tvShowsApp">
      <input placeholder="Search" />
      <h3>
        Displaying {episodesToDisplay.length}/{episodes.length} episodes
      </h3>
      <div>{episodesToDisplay}</div>
      <h4>
        Materials is taken from <a href="https://TVMaze.com">TVMaze.com</a>
      </h4>
    </main>
  );
}
