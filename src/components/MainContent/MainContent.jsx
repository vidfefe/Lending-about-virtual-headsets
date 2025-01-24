import Button from '../Button'
import SocialButtons from './../SocialButtons'
import Activities from '../Activities'

import styles from './MainContent.module.scss'

import mainImg from './../../img/main_image.svg'
import arrowImg from './../../img/icons/arrow_forward.svg'
import exploreImg from './../../img/socials/explore.svg'
import {ReactComponent as Star} from './../../img/icons/star.svg'


export default function MainContent(){
    return(
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h3 className={styles.virtualHeadsets}>Virtual Headsets</h3>
                <h1>Experience a new dimension of reality</h1>
                <div className='itemStar'>
                    <Star fill="#BF23F5"/>
                    <p>Step into the future with our virtual headset, come to life right before your eyes</p>
                </div>
                <div className={styles.buttons}>
                    <Button 
                        className = 'aquaButton aquaButton-large'
                        imgSrc = {arrowImg}
                        positionImg = 'right'
                    >
                        Visit Store
                    </Button>
                    
                    <Button 
                        className = 'transparentButton transparentButton-medium'
                        imgSrc = {exploreImg}
                        positionImg = 'right'
                    >
                        Explore
                    </Button>
                    
                </div>
                <div className={styles.socials}>
                    <h3>Follow us</h3>
                    <SocialButtons/> 
                </div>
            </div>
            <div className={styles.rightSide}>
                    <img  src={mainImg} alt='Ultra reality' />
                    <span className={styles.lineGradient}/>
                <Activities
                    className={styles.activities}
                />
            </div>
        </div>
    );
}


