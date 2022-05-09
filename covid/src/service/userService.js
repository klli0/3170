import http from "./httpService";

export function world_brokenline_chart() {
  return http.get("http://127.0.0.1:5000/index/world_brokenline_chart");
}

export function china_brokenline_chart() {
  return http.get("http://127.0.0.1:5000/index/china_brokenline_chart");
}

export function usa_brokenline_chart() {
  return http.get("http://127.0.0.1:5000/index/usa_brokenline_chart");
}

export function china_pie_chart() {
  return http.get("http://127.0.0.1:5000/index/china_pie_chart");
}

export function world_pie_chart() {
  return http.get("http://127.0.0.1:5000/index/world_pie_chart");
}

export function china_radar_chart() {
  return http.get("http://127.0.0.1:5000/index/china_radar_chart");
}

export function usa_radar_chart() {
  return http.get("http://127.0.0.1:5000/index/usa_radar_chart");
}

export function world_radar_chart() {
  return http.get("http://127.0.0.1:5000/index/world_radar_chart");
}

export function china_top_five_bar() {
  return http.get("http://127.0.0.1:5000/index/china_top_five_bar");
}

export function world_top_five_bar() {
  return http.get("http://127.0.0.1:5000/index/world_top_five_bar");
}

export function usa_top_five_bar() {
  return http.get("http://127.0.0.1:5000/index/usa_top_five_bar");
}
