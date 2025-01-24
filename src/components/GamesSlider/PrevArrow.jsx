import arrowPrevImg from './../../img/arrow_prev.svg'


const PrevArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className={`arrow`}>
             <img src={arrowPrevImg} alt='ArrowPrev'/>
        </button>
    );
};

export default PrevArrow;