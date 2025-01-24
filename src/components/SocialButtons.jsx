import twitterImg from './../img/socials/twitter.svg'
import instImg from './../img/socials/instagram.svg'
import discordImg from './../img/socials/discord.svg'
import facebookImg from './../img/socials/facebook.svg'


import Button from './Button'

const socials = [
    { img: twitterImg, alt: 'Twitter', url: 'https://twitter.com/'},
    { img: instImg, alt: 'Instagram', url: 'https://www.instagram.com'},
    { img: discordImg, alt: 'Discord', url: 'https://discord'},
    { img: facebookImg, alt: 'Facebook', url: 'https://www.facebook.com'},
]

export default function SocialButtons(){
    return (
        <div className='socialButtons'>
            {socials.map((social) => (
                <a
                    key={social.alt} 
                    href={social.url}
                    target='_blank'
                    rel="noreferrer" 
                >
                    <Button 
                        className='transparentButton transparentButton-square'
                        imgSrc = {social.img}
                        alt={social.alt}
                        positionImg='right'
                    />
                </a>
            ))
            }
        </div>
    );
}