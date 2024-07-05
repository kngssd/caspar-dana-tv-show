import episodes from "../data/gameOfThronesEpisodes.json";
import EpisodeCard from "../data/EpisodeCard";

export default function TVShowsApp() {
  const ep1 = episodes[0];
  return (
    <main className="tvShowsApp">
      <div>
        <EpisodeCard />
      </div>
    </main>
  );
}
