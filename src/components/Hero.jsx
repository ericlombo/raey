'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import sunglasses from'/public/sunglasses.jpg'
import handbag from '/public/handbag.jpg'
import zodiac from '/public/zodiac.jpg'
function Hero() {
  return (
    <Carousel className="bg-pink-600 items-center justify-center flex flex-wrap">
      <Carousel.Item>
        <Image
               className='w-25 h-25 w-full flex flex-wrap gap-4'
                src={sunglasses}
                alt="first slide"/>

        <Carousel.Caption>
          <h3 className="text-white sm:block">Vintage Polygon</h3>
          <p className="text-white sm:block">Beautiful vintage Polygon Cat Eye Sunglasses available @ksh 650</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Image
               className='w-25 h-25 items-center justify-center flex object-center'
                src={handbag}
                alt="second slide"/>
        <Carousel.Caption>
          <h3 className="text-white sm:block">Mini Cross Bag</h3>
          <p className="text-white sm:block">Leather mini Cross Shoulder Bag Available at Affordable Prices</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <Image
               className='w-25 h-25 items-center justify-center flex object-center'
                src={zodiac}
                alt="Third slide"/>
        <Carousel.Caption>
          <h3 className="text-white sm:block"> Taurus Zodiac sign Necklace</h3>
          <p className="text-white sm:block">
            Zodiac sign Necklaces Available at affordable prices
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;