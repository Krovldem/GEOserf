import Features1 from "../../src/assets/images/features1.jpg"
import Features2 from "../../src/assets/images/features2.jpg"
import Features3 from "../../src/assets/images/features3.jpg"
import Features4 from "../../src/assets/images/features4.jpg"

const Slider = () => {
    return (
        <section data-bs-version="5.1" className="slider4 mbr-embla cid-uBcfFwIttc" id="slider4-q">
            <div className="position-relative text-center">
                <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-1">
                        <strong>Какие проблемы мы решаем?</strong>
                    </h4>
                </div>
                <div
                    className="embla mt-4"
                    data-skip-snaps="true"
                    data-align="center"
                    data-contain-scroll="trimSnaps"
                    data-auto-play-interval="5"
                    data-draggable="true"
                >
                    <div className="embla__viewport container-fluid">
                        <div className="embla__container">
                            <div className="embla__slide slider-image item" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                                <div className="slide-content">
                                    <div className="item-wrapper">
                                        <div className="item-img">
                                            <img src={Features1} alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-7">
                                            <strong>Примеры проблемы</strong>
                                        </h5>
                                        <p className="mbr-text mbr-fonts-style mt-3 display-7">текст</p>
                                    </div>
                                    <div className="mbr-section-btn item-footer mt-2">
                                        <a href="../Products.jsx" className="btn item-btn btn-info display-7"
                                           target="_blank">
                                            Решение {'>'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="embla__slide slider-image item"
                                 style={{marginLeft: '1rem', marginRight: '1rem'}}>
                                <div className="slide-content">
                                    <div className="item-wrapper">
                                        <div className="item-img">
                                            <img src={Features2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-7">
                                            <strong>Пример проблемы</strong>
                                        </h5>
                                        <p className="mbr-text mbr-fonts-style mt-3 display-7">текст</p>
                                    </div>
                                    <div className="mbr-section-btn item-footer mt-2">
                                        <a href="../Products.jsx" className="btn item-btn btn-info display-7"
                                           target="_blank">
                                            Решение {'>'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="embla__slide slider-image item"
                                 style={{marginLeft: '1rem', marginRight: '1rem'}}>
                            <div className="slide-content">
                                    <div className="item-wrapper">
                                        <div className="item-img">
                                            <img src={Features3} alt="" />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-7">
                                            <strong>Пример проблемы</strong>
                                        </h5>
                                        <p className="mbr-text mbr-fonts-style mt-3 display-7">текст</p>
                                    </div>
                                <div className="mbr-section-btn item-footer mt-2">
                                    <a href="../Products.jsx" className="btn item-btn btn-info display-7" target="_blank">
                                        Решение {'>'}
                                    </a>
                                </div>
                            </div>
                            </div>
                            <div className="embla__slide slider-image item"
                                 style={{marginLeft: '1rem', marginRight: '1rem' }}>
                                <div className="slide-content">
                                    <div className="item-wrapper">
                                        <div className="item-img">
                                            <img src={Features4} alt="Mobirise Website Builder"/>
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h5 className="item-title mbr-fonts-style display-7">
                                            <strong>Пример проблемы</strong>
                                        </h5>
                                        <p className="mbr-text mbr-fonts-style mt-3 display-7">текст</p>
                                    </div>
                                    <div className="mbr-section-btn item-footer mt-2">
                                        <a href="../Products.jsx" className="btn item-btn btn-info display-7"
                                           target="_blank">
                                            Решение {'>'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="embla__button embla__button--prev">
                    <span className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                        <span className="sr-only visually-hidden visually-hidden">Previous</span>
                    </button>
                    <button className="embla__button embla__button--next">
                        <span className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                        <span className="sr-only visually-hidden visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Slider;