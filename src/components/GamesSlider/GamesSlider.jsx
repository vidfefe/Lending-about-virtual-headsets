import styles from './GamesSlider.module.scss'
import Slider from 'react-slick'


export default function Games({ sliderRef, slides }){

    const settings = {
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '60px'
      };

    return(
        <Slider {...settings} ref={sliderRef} className={styles.slider}>
           {slides.map ((slide) => (
                <div 
                    key={slide.title} 
                    className={styles.slide}
                >
                    <img src={slide.img} alt={slide.title}/>
                    <h4>{slide.title}</h4>
                </div>
           ))}
        </Slider>
    );
}


