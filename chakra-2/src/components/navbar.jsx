import {Flex,Box,Spacer,Heading,ButtonGroup,Button } from "@chakra-ui/react"
import { ArrowForwardIcon} from '@chakra-ui/icons'

//
function Navbar(){
    return(
        <>
        <Flex minWidth='max-content' alignItems='center'mb={2} gap='2' borderWidth='1.5px' borderRadius='lg' marginTop="5px">
          <Box p='2' marginLeft="10px">
            <Heading size='md' bg='cyan' color="white">4D</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='2' marginTop="" marginRight="8px">
            
            <Button colorScheme='telegram' variant="ghost" size="md">Log in</Button>
            <Button colorScheme='blue' variant="outline" size="md">Sign Up</Button>
            <Button colorScheme='telegram' rightIcon={<ArrowForwardIcon />} variant="solid" size="md">Post a Job</Button>
          </ButtonGroup>
          </Flex>
        
        
        </>
    )
}export default Navbar