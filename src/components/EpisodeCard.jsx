export default function EpisodeCard(props) {
  return (
    <div className="episode-card">
      <h1>{props.epTitle}-{props.season + props.episodeNum}</h1>
      <img src={props.episodeMedImg}/>
      <p>{props.epSum}</p>
    </div>
  );
}
