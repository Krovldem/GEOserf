import '../assets/theme/css/style.css'
import '../assets/dropdown/css/style.css'
import '../assets/socicon/css/styles.css'
import '../assets/web/assets/icons2/mobirise2.css'
import Products from "../Products";
import FirstPage from "../FirstPage";
import DemoPage from "../DemoPage";
import AboutPage from "../AboutPage";
import SmallLogo from "../../src/assets/images/logo-2-128x128.png"


const Navbar = () => {
    return (
        <section className="menu menu3 cid-uB0Fiz7sey" id="menu03-0">
            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <a href={FirstPage.link}>
                                <img src={SmallLogo} alt="Логотип" style={{ height: '5rem' }} />
                            </a>
                        </span>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-bs-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li className="nav-item">
                                <a className="nav-link link show mbr-fonts-style text-primary display-6" href={Products.link}>Продукты</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link show mbr-fonts-style text-primary display-6" href={DemoPage.link} aria-expanded="false">Демо</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link mbr-fonts-style text-primary display-6" href={AboutPage.link}>О нас</a>
                            </li>
                        </ul>
                        <div className="icons-menu">
                            <a className="iconfont-wrapper" href={Products.link}>
                                <span className="p-2 mbr-iconfont mobi-mbri-shopping-cart mobi-mbri"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
