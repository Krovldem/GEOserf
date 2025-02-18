import {Component} from "react";
import FirstPage from "./FirstPage";
import {Router, Route, Routes} from "react-router-dom";
import Products from "./Products";
import DemoPage from "./DemoPage";
import AboutPage from "./AboutPage";

export default class Main extends Component {

    render() {
        return (<>
                <Router location={window.location} navigator={window.history}>
                    <Routes>
                        <Route exact index={true} path={FirstPage.link} element={<FirstPage/>}/>
                        <Route path={Products.link} element={<Products/>}/>
                        <Route path={DemoPage.link} element={<DemoPage/>}/>
                        <Route path={AboutPage.link} element={<AboutPage/>}/>
                    </Routes>
                </Router>
            </>);
    }
}