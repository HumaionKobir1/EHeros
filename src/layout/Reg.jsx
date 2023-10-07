import { Outlet } from "react-router-dom"
import Navbar from "../share/Navbar/Navbar"

const Reg = () => {
    return(
        <div>
            <Navbar></Navbar>,
            <Outlet></Outlet>
        </div>
    );
}
export default Reg;