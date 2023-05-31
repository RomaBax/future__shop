import * as React from 'react';
import { Link,NavLink, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';
import './Home.css'


import { Text,Grid,GridItem,Box} from '@chakra-ui/react'



import { useEffect } from 'react';

import Cart from './Component/Cart';


 export default function BasicTextFields() {



    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 200) {
          navbar.classList.add('navbar-fixed');
        } else {
          navbar.classList.remove('navbar-fixed');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
    let { state } = useLocation();

  return (
      <>
   <Navbar/>
    
    
    <Text className='catalog' textAlign={"center"} mt={'350px'} fontSize='6xl'>Catalog</Text>

    <Grid templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(1, 1fr)", md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)", xl:"repeat(3, 1fr)", "2xl":"repeat(4, 1fr)"}} p={{sm:"0 80px", md:"0 10px", lg:"0 80px", xl:"0 20px", "2xl":"0 100px"}} gap={5}>
            <NavLink to={"/eletronika"} >
              <Cart text="Compyuters and Aksesuar" icon="https://cdna.artstation.com/p/assets/images/images/055/530/878/large/vladimir-kurilov-10.jpg?1667184830"/>
            </NavLink>

            <Cart text="Appliances" icon="https://moscowremontnik.ru/wp-content/uploads/2023/03/sjt4phpa016qyubndvwybarbmfbywbco.jpg"/>
            <Cart text="shoes" icon="https://frankfurt.apollo.olxcdn.com/v1/files/5w5sswlugpwe-UZ/image"/>
            <Cart text="clothes" icon="https://www.alltime.ru/obj/article/image-blog/Stil_parnya_20_let/Stil_parnya_20_let_2.jpg"/>
            <Cart text="parfumeria" icon="https://sun9-25.userapi.com/impg/wsPASqCpJWtNgAztC1VrkjxEwpK4gg-LXYqjUA/6oAyTxxQCpM.jpg?size=1024x757&quality=96&sign=0591974166a2ef3abd47d56f92a68c95&type=album"/>
            <Cart text="auto products" icon="https://image.nengun.com/catalogue/1024x768/nengun-5279-1500-hks-racing_suction-a52c296d.png"/>
            <Cart text="sports and clothes" icon="https://images.prom.ua/3264116103_w640_h640_muzhskoj-komplekt-odezhdy.jpg"/>
            <Cart text="books" icon="https://trafficnews.bg/news/2021/04/02/nai-ochakvanite-knigi-prez-2021-chast-1-474.jpg"/>
            
        </Grid>


        <Box m={"150px 0"} h={"15vh"} w={"100%"}>
            <Box w={"100%"} overflow={"hidden"}  h={"100%"} position={"relative"} >        
        <Box position={"absolute"} top={"0px"} display={"flex"} >
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" />{/* 1 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/732/732230.png" alt="" />{/* 2 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/882/882747.png" alt="" />{/* 3 */}
            <img className="img__cart" width={"180px"} src="https://icons.veryicon.com/png/o/miscellaneous/bitisland-world/iphone-42.png" alt="" />{/* 4 */}
            <img className="img__cart" width={"180px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/640px-Tesla_logo.png" alt="" />{/* 5 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" />{/* 1 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/732/732230.png" alt="" />{/* 2 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/882/882747.png" alt="" />{/* 3 */}
            <img className="img__cart" width={"180px"} src="https://icons.veryicon.com/png/o/miscellaneous/bitisland-world/iphone-42.png" alt="" />{/* 4 */}
            <img className="img__cart" width={"180px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/640px-Tesla_logo.png" alt="" />{/* 5 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/731/731984.png" alt="" /> {/* 1 */}
            <img className="img__cart" width={"180px"} src="https://cdn-icons-png.flaticon.com/512/732/732230.png" alt="" />{/* 2 */}
        </Box>

           </Box>
        </Box>

    <Footer/>
      </>

  );
  
}
