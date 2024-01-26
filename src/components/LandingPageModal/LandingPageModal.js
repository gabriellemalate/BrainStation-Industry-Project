import "./LandingPageModal.scss";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
import dummy from "../../assets/icons/deck.png";
import { useNavigate } from "react-router-dom";

function LandingPageModal() {
  const navigate = useNavigate();
  const onExitClicked = () => {
    navigate("/cruises");
    return;
  };

  return (
    <main className="main">
      <div className="landing-page-modal">
        <button
          className="landing-page-modal__button"
          onClick={(e) => {
            onExitClicked();
          }}
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <h2 className="landing-page-modal__header">Cruise Lingo</h2>
        <img className="landing-page-modal__picture" src={dummy} alt="/" />
        <div className="landing-page-modal__info">
          <div className="landing-page-modal__info-text">
          <p>
          <span className="landing-page-modal__info--blue">Muster Drill:</span>{" "}
          Mandatory safety drill before sailing, show you your emergency station
        </p>
        <p>
          <span className="landing-page-modal__info--blue">Sea sickness:</span>{" "}
          Nausea and dizziness cause by ship movement{" "}
        </p>
          </div>
       
        </div>
      </div>
    </main>
  );
}

export default LandingPageModal;
