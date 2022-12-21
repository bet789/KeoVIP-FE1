import React from "react";

export default function reverseString(str) {
  return str === "" || str === undefined ? "" : reverseString(str.substr(1)) + str.charAt(0);
}
