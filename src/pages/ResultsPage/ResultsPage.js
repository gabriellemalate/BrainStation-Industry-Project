import "./ResultsPage.scss";
import AddOn from "../../components/AddOn/AddOn"

function ResultsPage() {
    return (
        <>
            <main className="results">
                <div className="results-eq">
                    <article className="results-action">
                        <div class="results-action__close">
                            <div class="results-action__close-left"></div>
                            <div class="results-action__close-right"></div>
                        </div>
                        <button className="results-action__book">Book now</button>
                    </article>

                    <section className="results-top">
                        <div className="results-top-eq">
                            <h1 className="results-top__title">Your results are in!</h1>
                            <div className="results-top__best">
                                <h2 className="results-top__best-title">Cruise name</h2>
                                <div className="results-top__best-actions">
                                    <img
                                        className="results-top__best-actions-icon"
                                        src=""
                                        alt="Like this cruise!"
                                    // onClick=
                                    />
                                    <img
                                        className="results-top__best-actions-icon"
                                        src=""
                                        alt="Share this cruise!"
                                    />
                                </div>
                                <img src="" alt="" className="results-top__best-image" />
                                <ul className="results-top__best-list">
                                    <li className="results-top__best-list-item">1 week stay</li>
                                    <li className="results-top__best-list-item">Family-focused</li>
                                    <li className="results-top__best-list-item">Starting at $500</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <AddOn />
                    
                </div>
            </main>
        </>
    );
}

export default ResultsPage;