import "./AddOn.scss";

function AddOn() {
    return (
        <>
            <section className="results-cabins results-addons">
                <h2 className="results-addons__head">Cabins</h2>
                <article className="results-addons__carousel">
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Main Cabin</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Atrraction 1</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Atrraction 2</h3>
                    </div>
                </article>
            </section>

            <section className="results-acts results-addons">
                <h2 className="results-addons__head">Entertainment</h2>
                <article className="results-addons__carousel">
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Attraction 1</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Atrraction 2</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                        />
                        <h3 className="results-addons__carousel-item-head">Atrraction 3</h3>
                    </div>
                </article>
            </section>

            <section className="results-food results-addons">
                <h2 className="results-addons__head">Dining</h2>
                <article className="results-addons__carousel">
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                            src=""
                            alt=""
                        />
                        <h3 className="results-addons__carousel-item-head">Dining 1</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                            src=""
                            alt=""
                        />
                        <h3 className="results-addons__carousel-item-head">Dining 2</h3>
                    </div>
                    <div className="results-addons__carousel-item">
                        <img
                            className="results-addons__carousel-item-img"
                            src=""
                            alt=""
                        />
                        <h3 className="results-addons__carousel-item-head">Dining 3</h3>
                    </div>
                </article>
            </section>
        </>
    );
}

export default AddOn;