import { useState, useCallback } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer, SuperClusterAlgorithm } from "@googlemaps/markerclusterer";

const trees = [["Ash, green", 43.6495364521731, -79.41618733111581],
["Birch, white", 43.8037189558964, -79.3545349538418],
["Maple, Manitoba", 43.6776251576906, -79.2760802497644],
["Elm, American 'Valley Forge'", 43.7436916067803, -79.4252057780298],
["Spruce, Colorado blue", 43.733888921533, -79.3153757933933]]

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

export default function Ofertas() {
  const [mapContainer, setMapContainer] = useState(null);
  const onLoad = useCallback((map) => addMarkers(map), []);

  return (
    <GoogleMapsProvider
      googleMapsAPIKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
      onLoad={onLoad}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
    </GoogleMapsProvider>
  );
}

function addMarkers(map) {
  const infoWindow = new window.google.maps.InfoWindow();

  const markers = trees.map(([name, lat, lng]) => {
    const marker = new window.google.maps.Marker({ position: { lat, lng } });

    marker.addListener("click", () => {
      infoWindow.setPosition({ lat, lng });
      infoWindow.setContent(`
        <div class="info-window">
          <h2>${name}</h2>
        </div>
      `);
      infoWindow.open({ map });
    });

    return marker;
  });

  new MarkerClusterer({
    markers,
    map,
    algorithm: new SuperClusterAlgorithm({ radius: 200 }),
  });
}