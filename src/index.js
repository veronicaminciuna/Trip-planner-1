const mapboxgl = require("mapbox-gl");
const markers = require("./marker");
mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5Y2ZyYW5jaXMiLCJhIjoiY2s5c28wYmN6MTZocTNocjFjZG13ZHU2ayJ9.kfxynkdTHq66nlA63mvREw";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});
let markersArr = markers("hotel", [-74.009151, 40.705086]);
new mapboxgl.Marker(markersArr[0]).setLngLat(markersArr[1]).addTo(map);
