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

  return (
    <main className="tvShowsApp">
      <div>{episodeCards}</div>
      <h4>
        Materials is taken from <a href="https://TVMaze.com">TVMaze.com</a>
      </h4>
    </main>
  );
}
