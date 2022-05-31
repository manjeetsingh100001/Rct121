  import {Grid,GridItem ,Center} from "@chakra-ui/react";
function GRID(){
    return (
            <>
 <Grid h='200px' templateColumns={{sm:'repeat(1,1fr)',lg:'repeat(5,1fr)'}}gap={4}>
  {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' /> */}
  <GridItem colSpan={{sm:'1',lg:'1'}} bg='blue' >
     
 <Center h="200px"  color='black'>Navbar </Center>
      </GridItem>
  <GridItem colSpan={{sm:'1',lg:'3'}} bg='yellow' >
  <Center h="200px"  color='black'>Content </Center>
  </GridItem>
  <GridItem colSpan={{sm:'1',lg:'1'}} bg='tomato' >
  <Center h="200px"  color='black'>Widget </Center>   
  </GridItem>

   </Grid>


            </>
        )
    
} export default GRID