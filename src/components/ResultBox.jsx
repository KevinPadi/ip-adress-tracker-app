import { Flex, Stat, StatLabel, StatNumber, Divider } from '@chakra-ui/react'

function ResultBox ({ data }) {
  return (
    <Flex flexDirection={['column', 'column', 'row']} position='absolute' bg='white' bottom={['-6.5rem', '-6.5rem', '-5rem']} h={[250, 270, 170]} w={[300, 300, 1200]} zIndex={999} gap={[0, 0, 12]} p={6} borderRadius='xl'>
      <Stat textAlign={['center', 'center', 'left']}>
        <StatLabel fontSize={['10px', '10px', '12px']} color='brand.100' mb={[0, 0, 2]}>IP ADDRESS</StatLabel>
        <StatNumber fontSize={['lg', 'lg', '2xl']} fontWeight='500'>{data ? data.ip : ''}</StatNumber>
      </Stat>
      <Divider visibility={['hidden', 'hidden', 'visible']} borderColor='brand.100' orientation='vertical' />
      <Stat textAlign={['center', 'center', 'left']}>
        <StatLabel fontSize={['10px', '10px', '12px']} color='brand.100' mb={[0, 0, 2]}>LOCATION</StatLabel>
        <StatNumber fontSize={['lg', 'lg', '2xl']} fontWeight='500'>  {data ? `${data.location.region}, ${data.location.country}` : ''}</StatNumber>
      </Stat>
      <Divider visibility={['hidden', 'hidden', 'visible']} borderColor='brand.100' orientation='vertical' />
      <Stat textAlign={['center', 'center', 'left']}>
        <StatLabel fontSize={['10px', '10px', '12px']} color='brand.100' mb={[0, 0, 2]}>TIMEZONE</StatLabel>
        <StatNumber fontSize={['lg', 'lg', '2xl']} fontWeight='500'>{data ? `UTC ${data.location.timezone}` : ''} </StatNumber>
      </Stat>
      <Divider visibility={['hidden', 'hidden', 'visible']} borderColor='brand.100' orientation='vertical' />
      <Stat textAlign={['center', 'center', 'left']}>
        <StatLabel fontSize={['10px', '10px', '12px']} color='brand.100' mb={[0, 0, 2]}>ISP</StatLabel>
        <StatNumber fontSize={['lg', 'lg', '2xl']} fontWeight='500'>{data ? data.isp : ''}</StatNumber>
      </Stat>
    </Flex>
  // <Flex position='absolute' bg='orange.900' bottom='-4.5rem' h='150px' w='1200px' zIndex={999} gap={12} p={6} borderRadius='xl'>
  //   <Stat>
  //     <StatLabel fontSize='12px' color='brand.100' mb={2}>IP ADDRESS</StatLabel>
  //     <StatNumber fontSize='2xl' fontWeight='500'>asas</StatNumber>
  //   </Stat>
  //   <Divider borderColor='brand.100' orientation='vertical' />
  //   <Stat>
  //     <StatLabel fontSize='12px' color='brand.100' mb={2}>LOCATION</StatLabel>
  //     <StatNumber fontWeight='500'>asd</StatNumber>
  //   </Stat>
  //   <Divider borderColor='brand.100' orientation='vertical' />
  //   <Stat>
  //     <StatLabel fontSize='12px' color='brand.100' mb={2}>TIMEZONE</StatLabel>
  //     <StatNumber fontWeight='500'>asd</StatNumber>
  //   </Stat>
  //   <Divider borderColor='brand.100' orientation='vertical' />
  //   <Stat>
  //     <StatLabel fontSize='12px' color='brand.100' mb={2}>ISP</StatLabel>
  //     <StatNumber fontSize='2xl' fontWeight='500'>ads</StatNumber>
  //   </Stat>
  // </Flex>
  )
}

export default ResultBox
