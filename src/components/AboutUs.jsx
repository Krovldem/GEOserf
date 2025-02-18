import '../assets/css/mbr-additional.css'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/bootstrap-grid.min.css'
import '../assets/theme/css/style.css'
import AboutPage from "../../src/assets/images/photo-1605810230434-7631ac76ec81.jpeg"

const AboutUs = () => {
    return (
        <section className="article05 cid-uB0EGy3XtN" id="about-us-5-uB0EGy3XtN">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="card-wrapper">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-5 image-wrapper">
                                    <img className="w-100" src={AboutPage} alt="" />
                                </div>
                                <div className="col-12 col-lg col-md-12">
                                    <div className="text-wrapper align-left">
                                        <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                                            <strong>Революция в бизнесе</strong>
                                        </h1>
                                        <p className="mbr-text mbr-fonts-style mb-3 display-7">Пример</p>
                                        <p className="mbr-text mbr-fonts-style mb-3 display-7">Пример</p>
                                        <p className="mbr-text mbr-fonts-style display-7">Пример</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
