import AccordionQuestions from '../AccordionQuestions/AccordionQuestions'

import styles from './Questions.module.scss'

const questions = [
    {
        header: 'What are the different types of virtual headsets available?',
        content: `Virtual headsets are equipped with various sensors to track the user's movements. 
                These sensors can include accelerometers, gyroscopes, and sometimes external cameras or base stations. 
                They constantly monitor the position and orientation of the headset and sometimes the user's hand controllers.
                The headset has one or two high-resolution displays, one for each eye, positioned in front of the user's eyes. 
                These displays show stereoscopic 3D images, creating a sense of depth and immersion. 
                Between the displays and the user's eyes, help focus the images and adjust them for the user's field of view.`
    },
    {
        header: 'How does a virtual headset work?',
        content: `Virtual headsets are equipped with various sensors to track the user's movements. 
                These sensors can include accelerometers, gyroscopes, and sometimes external cameras or base stations. 
                They constantly monitor the position and orientation of the headset and sometimes the user's hand controllers.
                The headset has one or two high-resolution displays, one for each eye, positioned in front of the user's eyes. 
                These displays show stereoscopic 3D images, creating a sense of depth and immersion. 
                Between the displays and the user's eyes, help focus the images and adjust them for the user's field of view.`
    },
    {
        header: 'Do I need a powerful computer to use a virtual headset?',
        content:`Virtual headsets are equipped with various sensors to track the user's movements. 
                These sensors can include accelerometers, gyroscopes, and sometimes external cameras or base stations. 
                They constantly monitor the position and orientation of the headset and sometimes the user's hand controllers.
                The headset has one or two high-resolution displays, one for each eye, positioned in front of the user's eyes. 
                These displays show stereoscopic 3D images, creating a sense of depth and immersion. 
                Between the displays and the user's eyes, help focus the images and adjust them for the user's field of view.`
    },
    {
        header: 'What are the main applications of virtual headsets?',
        content: `Virtual headsets are equipped with various sensors to track the user's movements. 
                These sensors can include accelerometers, gyroscopes, and sometimes external cameras or base stations. 
                They constantly monitor the position and orientation of the headset and sometimes the user's hand controllers.
                The headset has one or two high-resolution displays, one for each eye, positioned in front of the user's eyes. 
                These displays show stereoscopic 3D images, creating a sense of depth and immersion. 
                Between the displays and the user's eyes, help focus the images and adjust them for the user's field of view.`
    }
]


export default function FAQ(){
    return(
        <div className={styles.container}>
            <h2>F.A.Q.</h2>
            <div className={styles.accordion}>
                <AccordionQuestions 
                    transition
                    transitionTimeout={250}
                    questions = {questions}
                />
            </div>
        </div>
    );
}


