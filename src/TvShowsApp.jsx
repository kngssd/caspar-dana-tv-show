import React from "react";
import episodes from "./data/gameOfThronesEpisodes.json";
import EpisodeCard from "./components/EpisodeCard";
import isInNameOrSum from "./components/isInNameOrSum";

export default function TVShowsApp() {

  const [episodesToDisplay, setEpisodesToDisplay] =
    React.useState(episodes);

  function handleSearch(event){
    setEpisodesToDisplay(episodes.filter((episode) => isInNameOrSum(episode, event.target.value)))
  }

  const episodeCards = episodesToDisplay.map((episode) => (
    <EpisodeCard
      key={episode.id}
      epTitle={episode.name}
      season={episode.season}
      episodeNum={episode.number}
      episodeMedImg={episode.image.medium}
      epSum={episode.summary}
    />
  ));

  return (
    <main className="tvShowsApp">
      <input placeholder="Search" onChange={handleSearch} />
      <h3>
        Displaying {episodesToDisplay.length}/{episodes.length} episodes
      </h3>
      <div>{episodeCards}</div>
      <h4>
        Materials is taken from <a href="https://TVMaze.com">TVMaze.com</a>
      </h4>
    </main>
  );
}
