export function secondsToTime(seconds: number): string {
  const zeroleft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const min = zeroleft((seconds / 60) % 60);
  const seg = zeroleft((seconds % 60) % 60);
  return `${min}:${seg}`;
}
