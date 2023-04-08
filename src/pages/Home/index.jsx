import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { apiKey } from "../../apikey";
import { Aside } from "../../components/Aside";
import { useQuery } from "react-query";
import { api } from "../../service/axios";
import { InputGoogle } from "./style";

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
      zoom={12}
      mapContainerStyle={{
        width: "100%",
        height: "100vh",
        display: "flex",
        gap: "3.5rem",
      }}
    >
      <Aside />
      <InputGoogle type="text" />

      {ocorrencias &&
        ocorrencias.map((ocorrencia) => (
          <Marker
            key={ocorrencia.id}
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
  return <Map />;
};
