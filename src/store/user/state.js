import Cookie from "js-cookie";

const currentUser = Cookie.getJSON("userInfo");

export default function() {
  return {
    userInfo: currentUser,
    userProfile: {}
  };
}
