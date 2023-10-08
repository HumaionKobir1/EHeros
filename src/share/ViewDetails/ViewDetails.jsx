import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    const {image, contact, department, name, position, status, rating,  details} = toyDetails;
    return (
        <div className="md:w-5/6 mx-auto px-3 rounded-lg shadow-lg bg-slate-100 p-6">
        <div className="md:w-4/5 mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center bg-slate-100 justify-center">
                <img
                className=" w-3/4 h-96 r"
                src={image}
                alt="employ"
                />
            </div>
            <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">{department}</h2>
                <p className="text-gray-600">{name}</p>
                <p className="text-gray-600">{contact}</p>
            </div>
            <div className="mt-4 flex justify-between">
                <p className =" font-semibold text-lg">Position: <span className="text-[#77153db2] ">${position}</span> </p>
                <div className="flex items-center mt-2">
                <svg
                    className="w-4 h-4 fill-current text-yellow-500 mr-1"
                    viewBox="0 0 24 24"
                >
                    <path
                    d="M12 2L14.74 8.56L22 9.53L16.82 14.4L18.21 21L12 17.31L5.79 21L7.18 14.4L2 9.53L9.26 8.56L12 2Z"
                    />
                </svg>
                <p className="text-gray-600">{rating}</p>
                </div>
                <p className="text-gray-600">Available Status : {status}</p>
            </div>
            <div className="mt-4">
                <p className="text-gray-600">
                {details}
                </p>
            </div>
            <Link to='/'><button  className="bg-[#77153db2] hover:bg-[#77153cd1] mx-auto md:mx-0 mb-3 mt-4  font-bold py-3 px-4 rounded w-full">Back</button></Link>
        </div>

        </div>
    );
};

export default ViewDetails;