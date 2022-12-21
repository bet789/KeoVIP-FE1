import axios from "axios";
import { API, URL_API_THESPORTS } from "../../contants";

export async function getApiTheSports() {
  const res = await fetch(URL_API_THESPORTS);
  const data = await res.json();
  return data;
}

export async function getApiTheSportsLive() {
  const res = await fetch(`${URL_API_THESPORTS}/live`);
  const data = await res.json();
  return data;
}

export async function getApiMatchList() {
  const res = await fetch(`${API}/website/matches`);
  const data = await res.json();
  return data;
}

export async function getApiMatchDetail(id) {
  const res = await fetch(`${API}/website/matches/${id}`);
  const data = await res.json();
  return data;
}

export async function getApiHighLight(params) {
  const res = await fetch(`${API}/website/highlight`);
  const data = await res.json();
  return data;
}

export async function getApiHighLightDetail(id) {
  const res = await fetch(`${API}/website/highlight/${id}`);
  const data = await res.json();
  return data;
}

export async function getApiMatchHistory(id) {
  const res = await fetch(`${API}/website/matches/${id}/history`);
  const data = await res.json();
  return data;
}

export async function getApiMatchOdds(id) {
  const res = await fetch(`${API}/website/matches/${id}/odds`);
  const data = await res.json();
  return data;
}
