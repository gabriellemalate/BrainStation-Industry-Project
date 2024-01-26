import './QuestionPage.scss';
import axios from 'axios';
import questionData from '../../data/questions';
import closeIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
import removeDark from '../../assets/icons/remove-dark.svg';
import removeLight from '../../assets/icons/remove-light.svg';
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

    const toNextPage = async (choice) =>{
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
                    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/cruises`, requestObject)
                    setCruises(response.data);
                }catch(error){
                    console.log(error)
                }
                
                navigate(`/`)
            }
        }catch(error){
            console.log(error);
        }
    }

    const onBackPage = () =>{
        if(Number(questionId) > 0){navigate(`/${questionId - 1}`)}
        else{navigate('/')}
    }

    const progressBar = () => {
        if(questionId){
            return questionData.map((question, index) => {
                if(index <= questionId){return <img src={removeDark} alt="progress bar complete" />}
                return <img src={removeLight} alt="progress bar to do" />;
            })
        }
        return ''
    }
    return (
        <main className='main'>
            <div className='question-page'>
                <button className='question-page__button'><img src={closeIcon} alt='Close Icon'/></button>
                <section className='question-page-window'>
                    <div className='question-page-window-bar'>
                        {progressBar()}
                    </div>
                    <p className='question-page-window__question'>{questionId ? questionData[questionId].question : `Hi, I'm the ocean oracle. Before we get into it, I'd like to ask you questions`}</p>
                    <button className='question-page-window__button' onClick={(e) => {
                        if(questionId) {toNextPage(questionData[questionId][1])} else {toNextPage(0)}
                        }}>{questionId ? questionData[questionId][1] :"Yes"}</button>
                    <button className='question-page-window__button' onClick={(e) => {
                        if(questionId) {toNextPage(questionData[questionId][2])} else {toNextPage(0)}
                        }}>{questionId ? questionData[questionId][2] : "No"}</button>
                    {questionId ? <button className='question-page-window__back' onClick={() => {onBackPage()}}>Back</button> : ''}
                </section>
            </div>
        </main>
    )
}

export default QuestionPage;