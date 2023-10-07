import Lottie from "lottie-react";
import animationData from "../../../public/banner.json"
import "./Banner.css";

const Banner = () => {
    return (
        <div className="bg-[rgb(234,234,235)] ">
            <div className="container mx-auto banner p-4 md:flex md:flex-row flex-col gap-3  justify-between items-center">
                {/* Left Side */}
                <div className="md:w-1/2 w-full">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Efficiently manage employee records and perform various administrative
                    </h1>
                    <p className=" mb-6 md:w-3/4 w-full">
                    As an employer, you have a duty to maintain accurate and up-to-date records of all your employee data. Having access to the right information can help you keep track of important metrics relating to performance and productivity.
                    </p>
                    <button className=" inline-flex  font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Let's Start
                    </a>
                    </button>
                </div>

                {/* Right Side Animation */}
                <div className=" md:flex md:justify-end md:w-1/2 w-full">
                    {/* Replace this with your animation component or content */}
                    <Lottie animationData={animationData}></Lottie>
                </div>
            </div>
        </div>
    );
}

export default Banner;