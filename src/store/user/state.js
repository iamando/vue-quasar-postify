import Cookie from "js-cookie";

const __inf = Cookie.getJSON("__inf");
const __prfl = Cookie.getJSON("__prfl");

export default function() {
  return {
    info: __inf,
    profile: __prfl
  };
}
