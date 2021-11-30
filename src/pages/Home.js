import React from 'react';
import {Carousel} from '3d-react-carousal';
import './../style/caroussel.css'; 
import pile from '../img/pile_carton.jpg';
import manu from '../img/manu.jpg';
import box from '../img/box.jpg';
import objet from '../img/objet.jpg';

function Home() {
let slides = [
        <img  src={manu} alt="1" />,
        <img  src={box} alt="2" />  ,
        <img  src={objet} alt="3" />  ,
    ];
  return (
    <><section className="home">
    <Carousel slides={slides} autoplay={false}/>
    
    </section>
    <section className="bot">
        <img  src={pile} ></img>
         </section>
    </>
  );
}
export default Home;