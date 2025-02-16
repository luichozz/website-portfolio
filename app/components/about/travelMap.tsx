import React, { useState, useEffect, useRef } from 'react';

interface CountryFeature {
  type: string;
  properties: {
    ISO_A3: string;
    ADM0_A3: string;
    NAME: string;
    ADMIN: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

interface CountryData {
  features: CountryFeature[];
}

const visitedCountries = [
  "USA", // United States
  "MEX", // Mexico
  "JPN", // Japan
  "ITA", // Italy
  "FRA", // France
  "ESP", // Spain
  "GBR", // United Kingdom
  "ISL", // Iceland
];

function GlobeComponent() {
  const [Globe, setGlobe] = useState<any>(null);
  const [countries, setCountries] = useState<CountryData>({ features: [] });
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const globeEl = useRef<any>();

  useEffect(() => {
    // Dynamically import react-globe.gl only on client side
    import('react-globe.gl').then(module => {
      setGlobe(module.default);
    });
  }, []);

  useEffect(() => {
    // Load country data
    fetch('https://vasturiano.github.io/react-globe.gl/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountries(data as CountryData);
      });
  }, []);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      
      // Set initial position
      globeEl.current.pointOfView({ lat: 39.73, lng: -104.99, altitude: 2.5 });
    }
  }, [Globe]);

  const isVisitedCountry = (properties: any) => {
    // Handle special case for France
    if (properties.NAME === "France" || properties.ADMIN === "France") {
      return true;
    }
    // Handle regular cases
    return visitedCountries.includes(properties.ISO_A3) || 
           visitedCountries.includes(properties.ADM0_A3);
  };

  const handlePolygonHover = (polygon: any | null) => {
    if (polygon) {
      setHoveredCountry(polygon.properties?.ADMIN || polygon.properties?.NAME || null);
    } else {
      setHoveredCountry(null);
    }
  };

  if (!Globe) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center text-white">
        Loading Globe...
      </div>
    );
  }

  return (
    <>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries.features}
        polygonAltitude={0.01}
        polygonCapColor={(feat: any) => 
          isVisitedCountry(feat.properties) ? '#fb8500' : '#1e293b'
        }
        polygonSideColor={() => 'rgba(148, 163, 184, 0.2)'}
        polygonStrokeColor={() => '#334155'}
        polygonLabel={({ properties: d }: any) => `
          <div class="text-white px-2 py-1 rounded-lg" style="background: rgba(0,0,0,0.66);">
            ${d.ADMIN || d.NAME || ''}
          </div>
        `}
        onPolygonHover={handlePolygonHover}
        polygonsTransitionDuration={300}
        atmosphereColor="#fff"
        atmosphereAltitude={0.1}
        width={800}
        height={600}
      />
    </>
  );
}

export default function TravelMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full h-[700px] overflow-hidden rounded-xl relative bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      {/* Globe Container */}
      <div className="absolute inset-0">
        {isClient ? (
          <GlobeComponent />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            Loading Globe...
          </div>
        )}
      </div>
    </div>
  );
}