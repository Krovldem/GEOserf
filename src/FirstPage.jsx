import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import Metrics from "./components/Metrics";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";
import AbstractLinkedPage from "./AbstractLinkedPage";

export default class FirstPage extends AbstractLinkedPage {

    static link = "/";

    render() {
        return (<>
            <Header/>
            <CallToAction/>
            <Metrics/>
            <AboutUs/>
            <Slider/>
        </>
        );
    }
}