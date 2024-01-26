import './LandingPage.scss';

import { useNavigate } from 'react-router-dom';
import closeIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';

function LandingPage(){
    const navigate = useNavigate();

    const onExitClicked = () => {
        navigate('/');
        return;
    }

    return(<main className='loading-page'>
        <button className='loading-page__button' onClick={(e)=>{onExitClicked()}}><img src={closeIcon} alt='Close Icon'/></button>
    </main>)
}

export default LandingPage;