import axios from "axios";
import { URL_API_THESPORTS } from "../../contants";

export async function getApiTheSports() {
  // Call an external API endpoint to get posts
  const res = await fetch(URL_API_THESPORTS);
  const data = await res.json();
  return data;
}
