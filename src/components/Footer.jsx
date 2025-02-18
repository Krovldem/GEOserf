import '../assets/css/mbr-additional.css'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/bootstrap-grid.min.css'
import '../assets/theme/css/style.css'
import '../assets/dropdown/css/style.css'
import '../assets/socicon/css/styles.css'
import '../assets/web/assets/icons2/mobirise2.css'
import BigLogo from "../../src/assets/images/logo-2-2-429x429.png"

const Footer = () => {
    return (
        <section className="footer5 cid-uB6Lvl5P4U" id="footer5-7">
            <div className="container">
                <div className="media-container-row">
                    <div className="col-md-2 col-6">
                        <div className="media-wrap">
                            <a href="">
                                <img src={BigLogo} alt="Логотип" />
                            </a>
                        </div>
                    </div>
                    <div className="col-10 col-6">
                        <p className="mbr-text align-right links mbr-fonts-style display-7">
                            <a href="" className="text-black text-primary">О нас</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="" className="text-black text-primary">Условия</a> &nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="media-container-row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                    <div className="media-container-row">
                        <div className="col-md-6 copyright">
                            <p className="mbr-text mbr-fonts-style display-7">
                                © Copyright 2025 - Все права защищены
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="social-list align-right">
                                <div className="soc-item">
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <span className="mbr-iconfont mbr-iconfont-social socicon-twitter socicon"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <span className="mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                        <span className="mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span>
                                    </a>
                                </div>
                                <div className="soc-item">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <span className="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
