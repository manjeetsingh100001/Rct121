import {Flex,Box,Spacer,Heading,ButtonGroup,Button } from "@chakra-ui/react"
function Navbar(){
    return(
        <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md' bg='blue'>4D</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='2'>
            
            <Button colorScheme='telegram' variant="ghost" size="md">Log in</Button>
            <Button colorScheme='blue' variant="outline" size="md">Sign Up</Button>
            <Button  rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant="solid" size="md">Post a Job</Button>
          </ButtonGroup>
          </Flex>
        
        
        </>
    )
}export default Navbar