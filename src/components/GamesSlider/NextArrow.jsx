
import arrowNextImg from './../../img/arrow_next.svg'


const NextArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className={`arrow`}>
             <img src={arrowNextImg} alt='ArrowNext'/>
        </button>
    );
};

export default NextArrow;