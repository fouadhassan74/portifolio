import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import features from "../fearures.json";
import { styled } from "styled-components";
const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Map() {
  return (
    <MapContainer>
      {" "}
      <ComposableMap>
        <Geographies
          geography={features}
          style={{ height: "100%", width: "100%" }}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[2.3522, 48.8566]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x='-8' textAnchor='end' alignmentBaseline='middle' fill='white'>
            {"Paris"}
          </text>
        </Annotation>
      </ComposableMap>
    </MapContainer>
  );
}

export default Map;
