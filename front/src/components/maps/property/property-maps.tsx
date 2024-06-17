import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import { useRouter } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { type Property } from '@/types/properties/property';
import { divIcon } from 'leaflet';

export default function PropertyMaps({
  properties,
}: {
  properties: Property[];
}): JSX.Element {
  const router = useRouter();
  console.log(properties);
  return (
    <MapContainer
      className="w-full h-72"
      center={[-29.704292, -53.718593]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((p) => {
        return (
          <Marker
            title={p.name}
            key={p.id}
            position={[p.latitude, p.longitude]}
          >
            <Popup className="flex flex-col">
              <div
                onClick={() => {
                  router.push(`/properties/${p.tag}`);
                }}
              >
                <p>Clique para ver {p.name}</p>
                <p>{p.address}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
