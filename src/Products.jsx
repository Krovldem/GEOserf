import AbstractLinkedPage from "./AbstractLinkedPage";
import FeaturesBlock from "./components/FeaturesBlock";

export default class Products extends AbstractLinkedPage {

    static link = "/product";

    render() {
        return (<>
            <FeaturesBlock/>
            </>);
    }

}