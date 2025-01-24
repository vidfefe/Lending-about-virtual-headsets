import {useRef} from 'react'
import styles from './Games.module.scss'

import GamesSlider from './../GamesSlider/GamesSlider'
import NextArrow from './../GamesSlider/NextArrow'
import PrevArrow from './../GamesSlider/PrevArrow'

import horizonGameImg from './../../img/games/Horizon.png'
import halfLifeGameImg from './../../img/games/Half-Life.png'
import fightNightGameImg from './../../img/games/Fight-Night.png'
import cooldWarGameImg from './../../img/games/Coold-War.png'

const games = [
    {img: horizonGameImg, title: 'Horizon : Call of the mountain'},
    {img: halfLifeGameImg, title: 'Half - Life : ALYX'},
    {img: fightNightGameImg, title: 'Fight Night Champion'},
    {img: cooldWarGameImg , title: 'Call of Duty : Coold War'}
]

export default function Games(){
    const sliderRef = useRef(null); 

    const next = () => {
        sliderRef.current.slickNext(); 
    };
    
    const prev = () => {
        sliderRef.current.slickPrev(); 
    };

    return(
        <div className={styles.container}>
        <div className={styles.header}>
                <h2>Top Games</h2>
                <h5>If you buy video 2 games, you will receive 1 video game for free, along with a <span>50%</span> discount.</h5>
                <div className={styles.arrows}>
                    <PrevArrow  onClick={prev} />
                    <NextArrow  onClick={next} />
                </div> 
        </div>
        <GamesSlider 
            sliderRef={sliderRef}
            slides = {games}
        />
    </div>
    );
}


