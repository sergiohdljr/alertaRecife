import {
  GoogleMap,
  useLoadScript,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import { Aside } from "../../components/aside";
import {} from "@phosphor-icons/react";

export const Map = () => {
  const position = { lat: -8.05428, lng: -34.8813 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return <h1>map</h1>;
};

export const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      {/* <Map /> */}
    </div>
  );
};
