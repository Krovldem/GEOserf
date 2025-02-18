import AbstractLinkedPage from "./AbstractLinkedPage";
import FeaturesSection from "./components/FeaturesSection";
import GeosurfSection from "./components/GeoSerfSection";
import Contacts from "./components/Contacts";
import ContactSection from "./components/ContactSection";

export default class AboutPage extends AbstractLinkedPage {

    static link = "/aboutpage";

    render() {
        return (<>
            <FeaturesSection/>
            <GeosurfSection/>
            <ContactSection/>
        </>);
    }

}