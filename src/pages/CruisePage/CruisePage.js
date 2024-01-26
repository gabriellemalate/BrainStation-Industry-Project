import './CruisePage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import closeIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
import backIcon from '../../assets/icons/arrow_back.svg';
import forwardIcon from '../../assets/icons/arrow_forward.svg';
import starWhiteIcon from '../../assets/icons/star-white.svg';
import starYellowIcon from '../../assets/icons/star-yellow.svg';
import cruiseModals from '../../data/cruiseModals';
import cruiseDetails from '../../data/cruiseDetails';
import {useState} from 'react';
import LandingPageModal from '../../components/LandingPageModal/LandingPageModal'

function CruisePage({onNextCruiseClicked, onPreviousCruiseClicked}){
    const [showModal, setShowModal] = useState(false)
    const [currentModal, setCurrentModal] = useState(cruiseModals[0])
    const navigate = useNavigate();
    const param = useParams().cruiseName
    console.log(param)
    const cruise = cruiseDetails.find(cruise => cruise.id === param)
    console.log(cruise);
    const onExitClicked = () => {
        navigate('/');
        return;
    }

    const onModalClicked = (index) =>{
        setCurrentModal(cruiseModals[index])
        setShowModal(true);
    }

    return(<main className='cruise-page'>
        {showModal ? <LandingPageModal modal={currentModal} setShowModal={(e) => {setShowModal(e)}}/> : ''}
        <div className='cruise-page-header'>
            <button className='cruise-page-header__close' onClick={(e)=>{onExitClicked()}}><img src={closeIcon} alt='Close Icon'/></button>
            <button className='cruise-page-header__book' />
        </div>
        <h2 className='cruise-page__best-line'>The best options for you!</h2>
        <div className='cruise-page-head'>
            <h1 className='cruise-page-head__name'>{cruise.name}</h1>
        </div>
        <div className='cruise-page-slide'>
            <button className='cruise-page-slide__back'><img src={backIcon} alt='back button' /></button>
            <img src={cruise.img} alt='cruise image' className='cruise-page-slide__image' />
            <button className='cruise-page-slide__forward'><img src={forwardIcon} alt='forward button' /></button>
        </div>
        <div className='cruise-page-rating'>
            <div className='cruise-page-rating-stars'>
                <img src={cruise.rating > 0 ? starYellowIcon : starWhiteIcon} alt='1 star rating'/>
                <img src={cruise.rating > 1 ? starYellowIcon : starWhiteIcon} alt='2 star rating'/>
                <img src={cruise.rating > 2 ? starYellowIcon : starWhiteIcon} alt='3 star rating'/>
                <img src={cruise.rating > 3 ? starYellowIcon : starWhiteIcon} alt='4 star rating'/>
                <img src={cruise.rating > 4 ? starYellowIcon : starWhiteIcon} alt='5 star rating'/>
            </div>
            <div className='cruise-page-rating-text'>
                <p className='cruise-page-rating-text__content'>Rating: {cruise.rating}/5</p>
            </div>
        </div>
        <div className='cruise-page-details'>
            <ul className='cruise-page-details-list'>
                {cruise.details.map(detail => {
                    return (<li>{detail}</li>)
                })}
            </ul>
        </div>
        {/*<p className='cruise-page__more-details'>Want to see more details on your trip? Click <a href='' className='cruise-page__more-details--link'>here</a> to see more.</p>*/}

        <div className='cruise-page-modals'>
            {cruiseModals.map((cruise, index)=>{
                return (<div className='cruise-page-modals-item' key={index} onClick={() => {onModalClicked(index)}}>
                    <img src={cruise.img} className='cruise-page-modals-item__image' alt={`${cruise.name} image`} />
                    <p className='cruise-page-modals-item__label'>{cruise.name}</p>
                </div>)
            })}
        </div>
    </main>)
}

export default CruisePage;