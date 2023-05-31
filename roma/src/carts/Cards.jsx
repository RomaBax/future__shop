import { Box,GridItem,Skeleton,SkeletonText,Text} from "@chakra-ui/react"
import "./Cart.css"

export default function Cards (props) {
    return(
        <Box h={"auto"}>
            <GridItem className="carts__items">
            {/* <Skeleton> */}
                <Box w={"90%"} bg={"gray"} h={"350px"} overflow="hidden" borderRadius={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <img className="img__icons__carts" src="https://i.ytimg.com/vi/G7kD3da4Ems/maxresdefault.jpg" alt="" />
                </Box>
                <Box className="Items">
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis veniam maiores necessitatibus, corporis aliquam? </Text>
                </Box>
                <Box h={"10%"} w={"100%"} p={"0px 15px"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                    <div className="BTn">
                        <button>Buy</button>   
                        <div className="linia"></div>
                    </div>
                </Box>
            </GridItem>
        </Box>
    )
}