import {
  GoogleMap,
  useLoadScript,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import { Aside } from "../../components/aside";
import { useQuery } from "react-query";
import { api } from "../../service/axios";

export const Map = () => {
  const position = { lat: -8.05428, lng: -34.8813 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const fetchFeed = api
    .get("/ocorrencias")
    .then((ocorrencias) => ocorrencias.data);

  const { data: ocorrencias } = useQuery(
    "ocorrenciasMapa",
    async () => await fetchFeed
  );

  return isLoaded ? (
    <GoogleMap
      center={position}
      zoom={8}
      mapContainerStyle={{ width: "100%", height: "100vh" }}
    >
      <Aside />
      {ocorrencias &&
        ocorrencias.map((ocorrencia) => (
          <Marker
            position={{
              lat: parseFloat(ocorrencia.latitude),
              lng: parseFloat(ocorrencia.longitude),
            }}
          />
        ))}
    </GoogleMap>
  ) : null;
};

export const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Map />
    </div>
  );
};
