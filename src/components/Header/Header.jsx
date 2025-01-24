import logoImg from './../../img/logo.svg'
import cartImg from './../../img/icons/cart.svg'
import searchImg from './../../img/icons/search.svg'

import styles from './Header.module.scss'


export default function Header(){
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <ul className={styles.navBar}>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Contact</li>
                    <li>Features</li>
                </ul>
                <img src={logoImg} alt='Logo' />
                <div className={styles.rightBar}>
                    <div className={styles.search}>
                        <input className='input-search' placeholder="Search games & products.." type="text"></input>
                    
                        <img src={searchImg}/>
                    </div>
                    
                    <img src={cartImg} alt="Cart" />
                </div>
            </header>
        </div>
    );
}

