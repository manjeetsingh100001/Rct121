import {SimpleGrid,Box,Center} from "@chakra-ui/react"

function SIMPLEGRID(){
    return (
        <>
<SimpleGrid columns={{sm: 2, md: 3}} spacing='40px'>
  <Box bg='blue' height='200px'> 
  <Center h="200px"  color='black'>Navbar </Center>
   </Box>
  <Box bg='yellow' height='200px'> 
  <Center h="200px"  color='black'>Content </Center>
   </Box>
  <Box bg='tomato' height='200px'>
  <Center h="200px"  color='black'>Widget </Center>     
        </Box>
 
</SimpleGrid>
        </>
    )
}export default SIMPLEGRID