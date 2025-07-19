export default function makeId() {
  return Math.trunc(Math.random() * 10_000_000_000).toString(16)
}
