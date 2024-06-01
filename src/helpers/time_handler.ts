export default function getFormattedTime(timestamp: string) {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}
