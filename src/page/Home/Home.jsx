import Advantages from "../../component/Advantage/Advantage";
import Banner from "../../component/Banner/Banner";
import Curved from "../../component/Curved/Curved";
import EmployCategory from "../../component/EmployCategory/EmployCategory";
import Features from "../../component/Features/Features";
import Offer from "../../component/Offer/Offer";

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <EmployCategory></EmployCategory>
            <Advantages></Advantages>
            <Features></Features>
            <Offer></Offer>
            <Curved></Curved>
        </div>
    );
}
export default Home;