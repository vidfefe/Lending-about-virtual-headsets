import educationImg from './../img/activities/education.svg'
import sportImg from './../img/activities/sport.svg'

export default function Activities({ className }){
    const activities = [
        {img: educationImg, text: 'Enhanced Education'},
        {img: sportImg, text: 'Training and Simulation'},
    ];

    return(
        <div className={className}>
            <ul>
                {activities.map((acitivity) => (
                    <li key={acitivity.text}>
                        <img src={acitivity.img} alt={acitivity.text}/> <span>{acitivity.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}