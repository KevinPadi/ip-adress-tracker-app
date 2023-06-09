import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: 'hsl(0, 0%, 59%)',
      900: 'hsl(0, 0%, 17%)'
    }
  },
  fonts: {
    body: 'Rubik'
  },
  styles: {
    global: {
      body: {
        bg: 'black'
      }
    }
  }
})

export default theme
