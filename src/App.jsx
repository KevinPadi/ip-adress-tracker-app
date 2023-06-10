import { Box, Heading, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import ArrowIcon from './assets/icons/ArrowIcon'
import ResultBox from './components/ResultBox'
import Map from './components/Map'
import { useState, useEffect } from 'react'

function App () {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)
  const handleChange = (event) => setSearch(event.target.value)

  useEffect(() => {
    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_IQNM6E6BWiBeO3GP55oxVlesbIQo2&ipAddress=')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  const handleClick = () => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_IQNM6E6BWiBeO3GP55oxVlesbIQo2&ipAddress=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  return (
    <Box>
      <Box
        display='flex'
        position='relative'
        alignItems='center'
        flexDirection='column'
        gap={5}
        w='100%'
        p={6}
        h={[290, 290, 250]}
        backgroundImage='./src/assets/images/pattern-bg-desktop.png'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <Heading as='h1' fontSize={['xl', 'xl', '3xl']} fontWeight={600} color='white'>IP Address Tracker</Heading>
        <InputGroup w={[300, 200, 550]}>
          <Input
            value={search}
            onChange={handleChange} p={6} size='lg' borderRadius={12} bg='whiteAlpha.900' placeholder='Search for any IP address or domain'
          />
          <InputRightElement cursor='pointer' w='3rem' h='100%'>
            <IconButton onClick={handleClick} w='100%' h='100%' borderRadius='0px 12px 12px 0px' size='md' bg='black' aria-label='Arrow icon' icon={<ArrowIcon />} />
          </InputRightElement>
        </InputGroup>
        <ResultBox data={data} />
      </Box>
      {data === null ? null : <Map lat={data.location.lat} lng={data.location.lng} />}
    </Box>
  )
}

export default App
