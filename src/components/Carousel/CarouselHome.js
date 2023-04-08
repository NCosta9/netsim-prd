import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselHome(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={props.img01}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={props.img02}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-3"
          src={props.img03}
        />
      </Carousel.Item>
    </Carousel>
  );
}
