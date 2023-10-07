import { FaDatabase , FaBook, FaCalendarAlt, FaUserFriends, FaTabletAlt, FaNetworkWired} from "react-icons/fa";
import "../Features/Features.css"
import { useEffect } from "react";
import Aos from "aos";
const Features = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
  
    return(
        <div className="bg-[#eaeaeb] container mx-auto rounded-md mt-20">
            <h1 className="md:text-3xl lg:text-4xl font-semibold text-center text-2xl pt-5 text-[#580828d9]">Other Key Features of EHero</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                <div data-aos="fade-up" className="bg-white border-b-[#77153db2]  md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaDatabase></FaDatabase>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Employee Database</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5 absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>

                <div data-aos="fade-right" className="bg-white border-b-[#77153db2] md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaBook></FaBook>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Document Management</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5 absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>

                <div data-aos="fade-left" className="bg-white border-b-[#77153db2] md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Leave and Attendance Management</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5  absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>

                <div data-aos="zoom-in-up" className="bg-white border-b-[#77153db2] md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaUserFriends></FaUserFriends>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Employee Engagement</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5  absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>

                <div data-aos="zoom-in-up" className="bg-white border-b-[#77153db2] md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaTabletAlt></FaTabletAlt>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Payroll Management</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5  absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>

                <div data-aos="zoom-in-up" className="bg-white border-b-[#77153db2] md:features border-2 rounded p-8 m-8 text-center  border-gray-300 card relative hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="rounded-full bg-[#77153db2] text-white p-5 absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:rotate-45">
                        <FaNetworkWired></FaNetworkWired>
                    </div>
                    
                    <div className="text-2xl font-bold my-4">Flexible Organisation Chart</div>

                    <div className="text-lg text-gray-600 mb-8">
                    you can store every employee data in one place! EHero offers you the best HR management system that makes your entire HR process easy and fast!
                    </div>

                    <button className=" inline-flex mt-5  absolute bottom-3 font-semibold rounded-xl border-2 hover:border-[#03e9f4] bg-[#77153db2] text-white  border-[#77153db2] md:block items-center">
                        <a href="#" className='w-full'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Read More
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Features;