import './QuestionPage.scss';
import axios from 'axios';
import questionData from '../../data/questions';
import closeIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function QuestionPage({setCruises, cruises}){

    const navigate = useNavigate();
    const questionId = useParams().questionId;
    
    useEffect(() => {
        if(cruises.length !== 0){
            navigate('/cruises')
        }
    }, [cruises])

    const toNextPage = (choice) =>{
        try{
            if(!questionId){
                navigate('/0')
            }else{
                localStorage.setItem(questionData.id, choice)
            }
            if(questionId < questionData.length - 1){
                navigate(`/${Number(questionId) + 1}`)
            }else if(questionId < questionData.length){
                let requestObject = {};
    
                questionData.forEach(question => {
                    requestObject[question.id] = localStorage.getItem(question.id) ? localStorage.getItem(question.id) : -1;
                })
                
                try{
                    ( async () => {const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/cruises`, requestObject)
                    setCruises(response.data);})()
                    navigate('/loading')
                }catch(error){
                    console.log(error)
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    const onBackPage = () =>{
        if(Number(questionId) > 0){navigate(`/${questionId - 1}`)}
        else{navigate('/')}
    }

    const onExitClicked = () => {
        navigate('/');
        return;
    }

    return (
        <main className='main'>
            <div className='question-page'>
                <button className='question-page__button' onClick={(e)=>{onExitClicked()}}><img src={closeIcon} alt='Close Icon'/></button>
                <section className='question-page-window'>
                    {questionId ? <progress value={Number(questionId)/questionData.length} className='question-page-window__progress'/> : ''}
                    <p className={`question-page-window__question${questionId ? '--question' : ''}`}>{questionId ? questionData[questionId].question : `Hi, I'm the Ocean Oracle, your guide to hidden depths. Before we set sail, mind if I ask a few questions to chart your course?`}</p>
                    <div className='question-page-window-button-container'>
                    <button className= {`question-page-window-button-container__button${questionId ? '--question' : ''}`} onClick={(e) => {
                        if(questionId) {toNextPage(questionData[questionId][1])} else {toNextPage(0)}
                        }}>{questionId ? questionData[questionId][1] :"Yes, let's get started"}</button>
                    {questionId ? <button className={`question-page-window-button-container__button${questionId ? '--question' : ''}`} onClick={(e) => {
                        if(questionId) {toNextPage(questionData[questionId][2])} else {toNextPage(0)}
                        }}>{questionId ? questionData[questionId][2] : "No"}</button> : ''}
                    </div>
                    {questionId ? <button className='question-page-window__back' onClick={() => {onBackPage()}}>Back</button> : ''}
                </section>
            </div>
        </main>
    )
}

export default QuestionPage;