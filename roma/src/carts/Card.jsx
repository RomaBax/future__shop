import { Box,Grid,Container, LinkBox,LinkOverlay,Heading } from "@chakra-ui/react"
import Cards from "./Cards"
import "./Cart.css"

function Card() {
    
    return(
        <>
       
        
        <Box>
            <Container pt={'300px'}  maxW={{base:'100%',sm:'80%',md:'95%',"2xl":'85%'}}>
                <h1 className="catalog">Compyuters and Aksesuar</h1>
            <Grid templateColumns={{base:'repeat(1, 1fr)', sm:"repeat(1, 2fr)", md:'repeat(2, 1fr)', xl:'repeat(3, 1fr)','2xl':'repeat(4, 1fr)'}} w={"100%"} gap={10}>

                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>

            </Grid>
            </Container>
        </Box>
       
        </>
    )
}
export default Card