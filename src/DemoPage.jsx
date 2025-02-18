import AbstractLinkedPage from "./AbstractLinkedPage";
import Contacts from "./components/Contacts";

export default class DemoPage extends AbstractLinkedPage {

    static link = "/contacts";

    render() {
        return (<>
            <Contacts/>
        </>);
    }

}