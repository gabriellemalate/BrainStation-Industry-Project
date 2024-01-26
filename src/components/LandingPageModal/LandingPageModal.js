import "./LandingPageModal.scss";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
import dummy from "../../assets/icons/deck.png";
import { useNavigate } from "react-router-dom";

function LandingPageModal({modal, setShowModal}) {
  const navigate = useNavigate();
  const onExitClicked = () => {
    setShowModal(false);
    return;
  };

  return (
    <div className="landing">
      <div className="landing-page-modal">
        <button
          className="landing-page-modal__button"
          onClick={(e) => {
            onExitClicked();
          }}
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <h2 className="landing-page-modal__header">{modal.name}</h2>
        <img className="landing-page-modal__picture" src={modal.img} alt="/" />
        <div className="landing-page-modal__info">
          <div className="landing-page-modal__info-text">
            {modal.details.map(detail=>{
              return (<p>
                <span className="landing-page-modal__info--blue">{detail.word}</span>{detail.def}
              </p>)
            })}
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default LandingPageModal;
