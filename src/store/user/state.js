import Cookie from "js-cookie";

export default function() {
  return {
    userInfo: Cookie.get("userInfo")
  };
}
