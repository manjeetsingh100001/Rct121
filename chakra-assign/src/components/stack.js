import {Stack,Box} from "@chakra-ui/react"

function STACK (){

    return(
        <>
 <Stack direction={['column', 'row']} spacing='24px'>
  <Box w='240px' h='240px' bg='blue'>
    Navbar
  </Box>
  <Box w='240px' h='240px' bg='yellow'>
    Content
  </Box>
  <Box w='240px' h='240px' bg='red'>
    Widget
  </Box>
</Stack>
        
        </>
    )
} export default STACK