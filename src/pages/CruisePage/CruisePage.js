import './CruisePage.scss';
import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import closeIcon from '../../assets/icons/x.svg';
import backIcon from '../../assets/icons/arrow_back.svg';
import forwardIcon from '../../assets/icons/arrow_forward.svg';
import halfStar from "../../assets/icons/half star.svg"
import star from "../../assets/icons/star.svg"
import cruiseModals from '../../data/cruiseModals';
import cruiseDetails from '../../data/cruiseDetails';
import LandingPageModal from '../../components/LandingPageModal/LandingPageModal'
import heart from "../../assets/icons/heart.svg";
import share from "../../assets/icons/share.svg";

function CruisePage({onNextCruiseClicked, onPreviousCruiseClicked}){
    const [showModal, setShowModal] = useState(false);
    const [currentModal, setCurrentModal] = useState(cruiseModals[0]);    
    const [currentSlide, setCurrentSlide] = React.useState(1);
    const navigate = useNavigate();
    const param = useParams().cruiseName
    console.log(param)
    const cruise = cruiseDetails.find(cruise => cruise.id === param)
    console.log(cruise);
    const onExitClicked = () => {
        navigate('/');
        return;
    }

    const onBackClicked = () => {
        // Handle back button click
        onPreviousCruiseClicked(); 
        setCurrentSlide(prevSlide => Math.max(1, prevSlide - 1));
    };

    const onForwardClicked = () => {
        onNextCruiseClicked(); 
        setCurrentSlide(prevSlide => Math.min(3, prevSlide + 1)); 
    };

    const onModalClicked = (index) =>{
        setCurrentModal(cruiseModals[index])
        setShowModal(true);
    }

    const onBackClicked = () => {
        // Handle back button click
        onPreviousCruiseClicked(); 
        setCurrentSlide(prevSlide => Math.max(1, prevSlide - 1));
    };

    const onForwardClicked = () => {
        onNextCruiseClicked(); 
        setCurrentSlide(prevSlide => Math.min(3, prevSlide + 1)); 
    };

    return(<main className='cruise-page'>
        {showModal ? <LandingPageModal modal={currentModal} setShowModal={(e) => {setShowModal(e)}}/> : ''}
        <div className='cruise-page-header'>
            <button className='cruise-page-header__close' onClick={(e)=>{onExitClicked()}}><img src={closeIcon} alt='Close Icon'/></button>
            <button className='cruise-page-header__book'>Book Now</button>
        </div>
        <h2 className='cruise-page__best-line'>The best option for you!</h2>
        <div className='cruise-page-head'>
            <h1 className='cruise-page-head__name'>4 Night Bahamas & Perfect Day Cruise</h1>
            {/* <p className='cruise-page-head__match'>Top match</p> */}
        </div>
        <div className='cruise-page-slide'>
            <div className='cruise-page-slide__actions'>
                <img className='cruise-page-slide__actions-icon' src={heart} alt="like"/>
                <img className='cruise-page-slide__actions-icon' src={share} alt ="share"/>
            </div>
            <button className='cruise-page-slide__back'><img src={backIcon} alt='back button' /></button>
            <img src={cruise.img} alt='cruise image' className='cruise-page-slide__image' />
            <button className='cruise-page-slide__forward'><img src={forwardIcon} alt='forward button' /></button>
        </div>
        <div className='cruise-page-rating'>
            <div className='cruise-page-rating-stars'>
                <img className='cruise-page-rating-stars-star' src={cruise.rating > 0 ? star : halfStar} alt='1 star rating'/>
                <img className='cruise-page-rating-stars-star' src={cruise.rating > 1 ? star : halfStar} alt='2 star rating'/>
                <img className='cruise-page-rating-stars-star' src={cruise.rating > 2 ? star : halfStar} alt='3 star rating'/>
                <img className='cruise-page-rating-stars-star' src={cruise.rating > 3 ? star : halfStar} alt='4 star rating'/>
                <img className='cruise-page-rating-stars-star' src={cruise.rating > 4 ? star : halfStar} alt='5 star rating'/>
                <p className='cruise-page-rating-text__content'>Rating
                {/* : {cruise.rating}/5 */}
                </p>
            </div>
            <div className='cruise-page-rating-text'>
                <span className='cruise-page-rating-text__number'>{currentSlide}/3</span>
            </div>
        </div>
        <div className='cruise-page-details'>
            <ul className='cruise-page-details-list'>
                {cruise.details.map(detail => {
                    return (<li className='cruise-page-details-list-item'>{detail}</li>)
                })}
            </ul>
        </div>
        {/*<p className='cruise-page__more-details'>Want to see more details on your trip? Click <a href='' className='cruise-page__more-details--link'>here</a> to see more.</p>*/}
        <h2 className='cruise-page-modals-head'>Essential Tips for a Smooth Voyage</h2>
        <div className='cruise-page-modals'>
            {cruiseModals.map(cruise=>{
                return (
                <div className='cruise-page-modals-item' key={cruise.name}>
                    <img src={cruise.img} className='cruise-page-modals-item__image' alt={`${cruise.name} image`} />
                    <p className='cruise-page-modals-item__label'>{cruise.name}</p>
                </div>)
            })}
        </div>
    </main>)
}

export default CruisePage;