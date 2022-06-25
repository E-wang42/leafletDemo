const map = L.map("map").setView([-29.5, 145], 4);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// }).addTo(map);

// const map = L.map("map", {
//   center: [-29.5, 145],
//   zoom: 3.5,
// });

const basemaps = {
  StreetView: L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ),
  Topological: L.tileLayer.wms("http://ows.mundialis.de/services/service?", {
    layers: "TOPO-WMS",
  }),
  Simplistic: L.tileLayer.wms("http://ows.mundialis.de/services/service?", {
    layers: "OSM-Overlay-WMS",
  }),
};

L.control.layers(basemaps).addTo(map);

basemaps.StreetView.addTo(map);

const customIcon = L.icon({
  iconUrl: "https://i.ibb.co/HPr40MW/check.png",
  iconSize: [32, 32],
});

const marker1 = L.marker([-37.69945, 176.27942], { icon: customIcon })
  .bindPopup("marker 1")
  .addTo(map);
const marker2 = L.marker([-27.64331, 153.30514])
  .bindPopup("marker 2")
  .addTo(map);
const marker3 = L.marker([-33.95633, 122.15027], { icon: customIcon })
  .bindPopup("marker 3")
  .addTo(map);
const marker4 = L.marker([-34.96239, 117.39122])
  .bindPopup("marker 4")
  .addTo(map);
const marker5 = L.marker([-17.96121, 122.21482], { icon: customIcon })
  .bindPopup("marker 5")
  .addTo(map);
const marker6 = L.marker([-16.50596, 151.75152])
  .bindPopup("marker 6")
  .addTo(map);
const marker7 = L.marker([-22.5944, 167.48444], { icon: customIcon })
  .bindPopup("marker 7")
  .addTo(map);
const marker8 = L.marker([-37.977, 177.057]).bindPopup("marker 8").addTo(map);
const marker9 = L.marker([-41.0376, 173.017], { icon: customIcon })
  .bindPopup("marker 9")
  .addTo(map);
const marker10 = L.marker([-37.6703, 176.212])
  .bindPopup("marker 10")
  .addTo(map);
