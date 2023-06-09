import { Box } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import * as L from 'leaflet'
import iconLocation from '../assets/icons/icon-location.svg'
import { useEffect, useState } from 'react'

function Map ({ lat, lng }) {
  const LeafIcon = L.Icon.extend({
    options: {}
  })

  const myIcon = new LeafIcon({
    iconUrl: iconLocation,
    iconSize: [38, 45],
    iconAnchor: [18, 46]

  })

  function LocationMarker () {
    const [position, setPosition] = useState(null)
    const map = useMap()

    useEffect(() => {
      setPosition([lat, lng])
      map.flyTo([lat, lng], map.getZoom())
    }, [])

    return position === null
      ? null
      : (
        <Marker icon={myIcon} position={position} />
        )
  }
  return (
    <Box h='70vh' bottom='10px'>
      <MapContainer style={{ height: '100%' }} center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
      </MapContainer>
    </Box>
  )
}

export default Map
