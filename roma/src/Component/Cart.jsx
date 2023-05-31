import { Box, Flex, Text,GridItem } from "@chakra-ui/react";

export default function Cart(props) {
    return(
        <GridItem w='100%' h='auto'>
        <Flex alignItems={"center"} justifyContent={"center"} h={"45vh"}>
        <Box className="Cart__item" width={"100%"} height={"500px"}>
            <img src={props.icon} alt="" />
            <Text className="text__carts OPROS">{props.text}</Text>

            <Text className="text__carts MANEY">Bolimi</Text>

            <div className="blur"></div>
        </Box>
        </Flex>
    </GridItem>
    )
}