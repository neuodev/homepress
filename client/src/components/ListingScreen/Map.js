import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
  width: '100%',
  height: '100%',
  position: 'block',
};

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
        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [location[0], location[1]],
                },
                properties: {
                  storeId: '123',
                  icon: 'shop',
                },
              },
            },
          },
          layout: {
            'icon-image': '{icon}-15',
            'icon-size': 1.5,
            'text-field': '{storeId}',
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.9],
            'text-anchor': 'top',
          },
        });
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
