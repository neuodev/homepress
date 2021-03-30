import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSelector } from 'react-redux';
import { getLocations } from '../../utils/getLocations';
const MapboxGLMap = ({ properties }) => {
  const locations = getLocations(properties);
  console.log(locations);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWhtZWRpYnJhaGltMTIzIiwiYSI6ImNrbXVoeGgxdzB6Ymoyd3BvYXRndXF0NXAifQ.7QpLOlNKBHpu3HwNNsiJmw';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center:
          properties.length > 0
            ? properties[0].location.coordinates
            : [-72.880468, 41.323331],
        zoom: 11,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();

        map.loadImage(
          'https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png',

          function (error, image) {
            if (error) {
              console.log(image);
              alert('error');
              throw error;
            }
            map.addImage('mapMarker', image);
            map.addSource('point', {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: locations,
              },
            });
            map.addLayer({
              id: 'points',
              type: 'symbol',
              source: 'point',
              layout: {
                'icon-image': 'mapMarker',
                'icon-size': 0.1,
              },
            });
          }
        );
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, locations]);

  return (
    <div
      className='col-span-12 px-5 shadow-inner  lg:col-span-6 lg:px-0 mt-5 lg:mt-0'
      id='map-height'>
      <div
        className=' absoluted dtop-0 dleft-0  shadow-inner w-full h-full'
        ref={el => (mapContainer.current = el)}
      />
    </div>
  );
};

export default MapboxGLMap;
