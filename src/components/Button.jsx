export default function Button({ className, alt, imgSrc, positionImg, children}){
    return(
            <button className={className}>
                {positionImg === 'left' &&  imgSrc && <img src={imgSrc} alt={alt}/>}
                {children} 
                {positionImg === 'right' &&  imgSrc && <img src={imgSrc} alt={alt}/>}
            </button>
    );
}