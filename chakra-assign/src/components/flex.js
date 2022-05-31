import {Text,Flex,Box,Center} from "@chakra-ui/react"

function FLEX (){
    return(
        <>
        
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <Flex gap={20}>
          <Box w='70px' h='40' bg='blue' >
          <Center h="40"  color='black'>Navbar </Center>
            </Box>
          {/* <Spacer /> */}
          <Box w='170px' h='40' bg='yellow' >
          <Center h="40"  color='black'>Content </Center>
           </Box>
          {/* <Spacer /> */}
          <Box w='180px' h='40' bg='red' >
          <Center h="40"  color='black'>Widget </Center>
          </Box>
        </Flex>   
        </>
    )
} export default FLEX