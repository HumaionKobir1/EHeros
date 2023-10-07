import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";

const Main = () => {
    return(
        <div>
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Main;