
import {Center,Box,VStack,Input,InputGroup,InputRightElement} from "@chakra-ui/react"
import { SearchIcon} from '@chakra-ui/icons'
function BannerDiv(){
    return(
        <>
        <VStack>       
<Center    color='cyan' marginTop="50px">
<Box fontSize='6xl'  fontWeight='bold'>Find The Right </Box>
</Center>
<Center>
<Box fontSize='6xl'  fontWeight='bold'>Four-Day Week Job </Box>
</Center>
<Center>
<InputGroup size='md' w="400px" width='auto' >
   
    <Input placeholder='Type Job Title or Keyword' />
    {/* <InputRightElement children={<SearchIcon color='' />} /> */}
    
  </InputGroup>
  <Center w='40px' h='40px' bg='tomato' color='white'>
    <SearchIcon />
  </Center>
</Center>
</VStack>
        </>
    )
}export default BannerDiv