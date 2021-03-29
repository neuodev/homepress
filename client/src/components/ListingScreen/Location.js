import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWhtZWRpYnJhaGltMTIzIiwiYSI6ImNrbXVoeGgxdzB6Ymoyd3BvYXRndXF0NXAifQ.7QpLOlNKBHpu3HwNNsiJmw';

const Location = ({ location, address }) => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9166);
  const [lat, setLat] = useState(42.347);
  const [zoom, setZoom] = useState(3);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, [lng, lat, zoom]);

  return (
    <div>
      <div className='container mx-auto max-w-screen-lg p-5 pt-7'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold '>Location</h1>
          <div className='flex items-center '>
            <i
              class='fa fa-map-marker text-blue-500  mr-2'
              aria-hidden='true'></i>
            <p>{address}</p>
          </div>
        </div>
        <div ref={mapContainer} className='w-full h-96 bg-blue-300 mt-7'></div>
      </div>
    </div>
  );
};

export default Location;
