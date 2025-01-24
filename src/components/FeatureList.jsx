
import {ReactComponent as Star} from '../img/icons/star.svg'

export default function FeaturesList({ className }){
    const features = 
    [
        "High-resolution OLED or LCD screens: Provide sharp and clear visuals.",
        "Inside-out tracking: Built-in sensors (cameras or other sensors).",
        "High-resolution OLED or LCD screens: Provide sharp and clear visuals.",
        "Refresh rate: Higher refresh rates reduce motion sickness and provide.",
        "Eye tracking: Monitors the movement of the user's eyes, allowing for more.",
        "Refresh rate: Higher refresh rates reduce motion sickness and provide."
    ]

    return(
        <ul className={className}>
            {features.map((feature, index) => (
                <div 
                    key= {index} 
                    className='itemStar' 
                    style={{width: '48%'}}
                >
                   <Star fill="#3DDEED" />
                    <p>{feature}</p>
                </div>
            ))}
        </ul>
    );
}