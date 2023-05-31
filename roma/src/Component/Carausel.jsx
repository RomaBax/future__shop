import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carausel.css'
import CarImg from '.././img/car_rec2.jpeg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className='car_img' Prefer alt='img' src="https://wallpapercrafter.com/desktop/93055-motherboard-msi-gaming-computer-hd-4k.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className='car_img' Prefer alt='img' src="https://www.sneakerhdwallpapers.com/wallpapers/2022/nike-sb-dunk-low-valour-blue-wallpaper-4k.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img className='car_img' Prefer alt='img' src="https://fotografias.larazon.es/clipping/cmsimages02/2023/01/31/A478F722-3BC9-4470-9667-9AD880729F69/todo-que-sabe-iphone-plegable_98.jpg?crop=2426,1365,x61,y0&width=1900&height=1069&optimize=low&format=webply" onDragStart={handleDragStart} role="presentation" />,
];

const Gallery = ({fixed}) => {
  return (
    <div className={fixed}>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://wallpapercrafter.com/desktop/93055-motherboard-msi-gaming-computer-hd-4k.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://wallpapercrafter.com/desktop/93055-motherboard-msi-gaming-computer-hd-4k.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://wallpapercrafter.com/desktop/93055-motherboard-msi-gaming-computer-hd-4k.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Gallery