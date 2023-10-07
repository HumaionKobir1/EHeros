import Advantages from "../../component/Advantage/Advantage";
import Banner from "../../component/Banner/Banner";
import EmployCategory from "../../component/EmployCategory/EmployCategory";
import Features from "../../component/Features/Features";

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <EmployCategory></EmployCategory>
            <Advantages></Advantages>
            <Features></Features>
        </div>
    );
}
export default Home;