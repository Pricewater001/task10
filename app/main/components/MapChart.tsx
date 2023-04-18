

"use client";
import React, { useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} 
            fill="242D3C"
            stroke="#fff"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
