
import './App.css';
import { Box,Center, Grid, GridItem ,Container,Flex,Square,Text,SimpleGrid ,Stack, HStack, VStack,StackDivider} from "@chakra-ui/react";

function App() {
  return (
    <>
    <div className="App">
     <Box bg='tomato' w='100%'m='0' p={8} color='white'>
         This is the Box
        
         <p>let see html tag </p>
           </Box>
           <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
             Button
           </Box>
          
           <Center bg='tomato' h='50px' color='white'>
  This is the Center
</Center>
<Container maxW='container.sm' bg='purple' color='green'>
  There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production
</Container>
<Flex color='white'>
  <Center w='100px'h="100px" bg='green'>
    <Text>Box 1</Text>
  </Center>
  <Square bg='blue' size='150px'>
    <Text>Box 2</Text>
  </Square>
  <Box flex='1' bg='tomato'>
    <Text>Box 3</Text>
  </Box>
</Flex>

<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='100' bg='blue' />
  <GridItem w='100%' h='100' bg='blue' />
  <GridItem w='100%' h='100' bg='blue' />
  <GridItem w='100%' h='100' bg='blue' />
  <GridItem w='100%' h='100' bg='blue' />
</Grid>

<Grid
  h='200px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={10} marginTop="20px">
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
<Grid templateColumns='repeat(5, 1fr)' gap={4} marginTop="20px">
  <GridItem colSpan={2} h='50' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='50' bg='papayawhip' />
</Grid>
<SimpleGrid columns={2} spacing={10}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>

</SimpleGrid>



    </div>
    {/* //      Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
//  will have the same effect.  */}

  <SimpleGrid columns={[2, null, 3]} spacing='40px'marginTop="20px">
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
   </SimpleGrid>
   {/* Auto-responsive grid# */}

   <SimpleGrid minChildWidth='120px' spacing='40px' marginTop="20px">
  <Box bg='green' height='80px'></Box>
  <Box bg='green' height='80px'></Box>
  <Box bg='green' height='80px'></Box>
  <Box bg='green' height='80px'></Box>
  <Box bg='green' height='80px'></Box>
  <Box bg='green' height='80px'></Box>
</SimpleGrid>
<SimpleGrid columns={2} spacingX='40px' spacingY='20px'>

  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
<HStack spacing='24px' marginTop="20px">
  <Box w='40px' h='40px' bg='yellow'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink'>
    3
  </Box>
</HStack>
<Stack direction={['column', 'row']} spacing='24px'>
  <Box w='40px' h='40px' bg='yellow'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink'>
    3
  </Box>
</Stack>
<VStack divider={<StackDivider borderColor='gray' />} spacing={4}align='stretch'>
  <Box h='40px' bg='yellow'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink'>
    3
  </Box>
</VStack>
{/* 1em=16px */}
{/* const breakpoints = {
  sm: '30em',480px
  md: '48em',768px
  lg: '62em',992px
  xl: '80em',1280px
  '2xl': '96em',1536px
} */}
<Box bg='red' w={[300, 400, 500]}>
  This is a box
</Box>
<>
  <Box
    height={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '25%', // 80em+
    }}
    bg='teal.400'
    width={[
      '100%', // 0-30em
      '50%', // 30em-48em
      '25%', // 48em-62em
      '15%', // 62em+
    ]}
  />
  {/* responsive font size */}
  <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
  {/* responsive margin */}
  <Box mt={[2, 4, 6, 8]} width='full' height='24px' bg='tomato' />
  {/* responsive padding */}
  <Box bg='papayawhip' p={[2, 4, 6, 8]}>
    Padding
  </Box>
</>
</>
  );
}

export default App;

