export default function removePTags(string) {
  const openPTagIndex = string.indexOf("<p>");
  const closingPTagIndex = string.lastIndexOf("</p>");

  return string.slice(openPTagIndex + 3, closingPTagIndex);
}
