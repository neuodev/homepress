import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxGLMap = ({ location }) => {
  location = location.coordinates;
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWhtZWRpYnJhaGltMTIzIiwiYSI6ImNrbXVoeGgxdzB6Ymoyd3BvYXRndXF0NXAifQ.7QpLOlNKBHpu3HwNNsiJmw';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [location[0], location[1]],
        zoom: 10,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
        var marker = new mapboxgl.Marker()
          .setLngLat([location[0], location[1]])
          .addTo(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      className='w-full h-full inline-block'
      ref={el => (mapContainer.current = el)}
    />
  );
};

export default MapboxGLMap;
