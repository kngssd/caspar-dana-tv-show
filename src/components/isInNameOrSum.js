export default function isInNameOrSum(episode, searchTerm) {
  return (
    episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
