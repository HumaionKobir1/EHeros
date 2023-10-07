import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";

const Log = () => {
    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
}
export default Log;