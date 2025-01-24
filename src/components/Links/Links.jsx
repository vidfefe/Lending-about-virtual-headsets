import SocialButtons from '../SocialButtons';
import Subscribe from './../Subscribe/Subscribe'

import logoImg from './../../img/logo.svg';

import styles from './Links.module.scss';

const linksData = [
    {
        title: 'Menu',
        items: ['Home', 'Catalog', 'Features', 'Contact'],
    },
    {
        title: 'Company',
        items: ['Login', 'Sign Up', 'Privacy', 'Products'],
    },
];

export default function Links(){
    return(
            <div className={styles.links}>   
                <div className={styles.mainLinks}>
                    <img src={logoImg} alt='Logo'/>
                    <SocialButtons/>
                    <p>(+994) 199-28-786</p>
                </div> 
                {linksData.map(({title, items}, i) => (
                    <ul key={i}>
                        <li><h5>{title}</h5></li>
                        {items.map((item) => (
                            <li key={item}><p>{item}</p></li>
                        ))}
                    </ul>
                ))}
                <Subscribe/>
            </div>
    );
}

