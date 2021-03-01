mapboxgl.accessToken =
  "pk.eyJ1IjoiamFuMTFlbGV2ZW4iLCJhIjoiY2tkNXh5dTBjMHRvMzMxb2RzMjMwb2diZiJ9.bGsHl4SjLLuMtgT6mwzUnw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-left");

var marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);
