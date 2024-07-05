export default function EpisodeCard(props) {
  function episodeCode(episodeNum, season) {
    const formattedEpNum = episodeNum.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    const formattedSeasonNum = season.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return `S${formattedSeasonNum}E${formattedEpNum}`;
  }

  return (
    <div className="episode-card">
      <h1>
        {props.epTitle}-{episodeCode(props.episodeNum, props.season)}
      </h1>
      <img src={props.episodeMedImg} />
      <p>{props.epSum.slice(3, -4)}</p>
    </div>
  );
}
