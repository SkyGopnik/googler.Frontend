export default function queryGet(key: string) {
  const search = window.location.search;
  const math = search.match(new RegExp(key + "=([^&=]+)"));

  return math ? math[1] : "";
}